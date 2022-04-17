from .db import db
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey

class Product(db.Model, UserMixin):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(500), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    user = relationship("User", back_populates="products")
    shoppingcart = relationship('ShoppingCart', back_populates='product', cascade = "all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url,
            'price': self.price,
            'category': self.category,
            'quantity': self.quantity,
            'user':self.user.to_dict(),
        }
