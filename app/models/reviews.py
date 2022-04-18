from .db import db
from flask_login import UserMixin
from sqlalchemy.orm import relationship
from sqlalchemy.schema import Column, ForeignKey




class Reviews(db.Model,UserMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)

    user = relationship("User", back_populates="reviews")
    product = relationship("Product", back_populates="reviews")



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'title': self.title,
            'body': self.body,
            'user':self.user.to_dict(),
            'product': self.product.to_dict()
        }
