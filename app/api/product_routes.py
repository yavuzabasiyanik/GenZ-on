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

