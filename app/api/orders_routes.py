from flask import Blueprint, jsonify, session, request
from app.models import User,Product, db, Order, OrderItem
from flask_login import current_user, login_user, logout_user, login_required



order_routes = Blueprint('orders', __name__)


def error_thingy(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@order_routes.route('/',methods=['GET'])
def getAllOrders():

    allOrders = Order.query.all()

    return {'allOrders': [order.to_dict() for order in allOrders]}


@order_routes.route('/', methods=['POST'])
def createOrder():

    req = request.json
    errors = []

    order = Order(
        user_id = current_user.id,
        totalCost = req['totalCost'],
        instructions = req['instructions']
    )

    db.session.add(order)
    db.session.commit()


    if('product_id' in req['products'][0]):
        for product in req['products']:
            orderedproduct = OrderItem(
                product_id = product['product_id'],
                order_id = order.id,
                itemNum = product['quantity']
            )
            db.session.add(orderedproduct)
    else:
        orderedproduct = OrderItem(
                product_id = req['products'][0]['id'],
                order_id = order.id,
                itemNum = req['quantity']
            )
        db.session.add(orderedproduct)
    db.session.commit()


    return order.to_dict()


@order_routes.route('/delete/<order_id>', methods=['DELETE'])
def deleteOrder(order_id):

    order = Order.query.get(order_id)
    db.session.delete(order)
    db.session.commit()

    return {"id": order_id}

@order_routes.route('/update/<order_id>', methods=['PUT'])
def updateOrder(order_id):

    req = request.json

    order = Order.query.get(order_id)

    order.instructions = req['instructions']

    db.session.commit()

    return order.to_dict()
