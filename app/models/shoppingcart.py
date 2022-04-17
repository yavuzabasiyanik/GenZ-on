from .db import db
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey


class ShoppingCart(db.Model,UserMixin):
    __tablename__ = 'shoppingcart'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)


    user = relationship("User", back_populates="shoppingcart")
    product = relationship('Product', back_populates="shoppingcart")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'user': self.user.to_dict(),
            'product': self.product.to_dict()
        }
