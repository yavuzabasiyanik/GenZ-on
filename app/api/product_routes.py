from flask import Blueprint, jsonify, session, request
from app.models import User,Product, db
from app.forms import ProductForm
from flask_login import current_user, login_user, logout_user, login_required

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

    form = ProductForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(
            user_id = current_user.id,
            name = form.data['name'],
            description = form.data['description'],
            image_url = form.data['image_url'],
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
    return {"product_id": product_id}


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
