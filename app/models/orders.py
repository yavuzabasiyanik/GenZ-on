from .db import db
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey


orderedItems = db.Table(
    "orderedItems",
    db.Column("order_id", db.Integer, db.ForeignKey("products.id")),
    db.Column("product_id", db.Integer, db.ForeignKey("orders.id"))
)

class Order(db.Model, UserMixin):
    __tablename__ = 'orders';


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    totalCost = db.Column(db.Integer, nullable=False)
    instructions = db.Column(db.Integer, nullable=False)


    buyer = db.relationship('User', backref= 'orders')

    orderedItems = db.relationship('Product', backref='orders', secondary=orderedItems)

    def to_dict(self):
        return{
            'id': self.id,
            'userId': self.userId,
            'totalCost': self.totalCost,
            'instructions':self.instructions,
            'buyer': self.buyer,
            'orderedItems': [item.to_dict() for item in self.orderedItems]
        }
