from flask import Blueprint, jsonify, session, request
from app.models import User,Product, db
from app.forms import ProductForm
from flask_login import current_user, login_user, logout_user, login_required
# from app.s3_helpers import (
#     upload_file_to_s3, allowed_file, get_unique_filename)
import boto3
import botocore
import os
import uuid

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"https://{BUCKET_NAME}.s3.amazonaws.com/"
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}

s3 = boto3.client(
   "s3",
   aws_access_key_id=os.environ.get("S3_KEY"),
   aws_secret_access_key=os.environ.get("S3_SECRET")
)


def allowed_file(filename):
    return "." in filename and \
           filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"


def upload_file_to_s3(file, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case the our s3 upload fails
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}

product_routes = Blueprint('product', __name__)



def error_thingy(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@product_routes.route('/', methods=['GET'])
def getAllProducts():

    allProducts = Product.query.all()

    return {'allProducts': [product.to_dict() for product in allProducts]}


@product_routes.route('/', methods=['POST'])
def createProduct():

    if "image" not in request.files:
        return {"errors": "image required"}, 400


    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400


    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    form = ProductForm()


    # upload_file_to_s3, allowed_file, get_unique_filename

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(
            user_id = current_user.id,
            name = form.data['name'],
            description = form.data['description'],
            image_url = url,
            price = form.data['price'],
            quantity = form.data['quantity'],
            category = form.data['category']
        )
        db.session.add(product)
        db.session.commit()
        return product.to_dict()
    return {'errors': error_thingy(form.errors)}, 401


@product_routes.route('/delete/<product_id>', methods=['DELETE'])
def deleteProduct(product_id):

    product = Product.query.get(product_id)

    db.session.delete(product)
    db.session.commit()
    return {"id": product_id}


@product_routes.route('/update/<product_id>', methods=['PUT'])
def updateProduct(product_id):

    form = ProductForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        product = Product.query.get(product_id)

        product.name = form.data['name']
        product.description = form.data['description']
        product.image_url = form.data['image_url']
        product.price = form.data['price']
        product.quantity = form.data['quantity']
        product.category = form.data['category']

        db.session.commit()
        return product.to_dict()
    return {'errors': error_thingy(form.errors)}, 401
