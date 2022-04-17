from flask_wtf import FlaskForm
from wtforms import StringField , IntegerField, TextAreaField, SelectField
from wtforms.validators import DataRequired, ValidationError, Length, URL


class ShoppingCartForm(FlaskForm):
    user_id = IntegerField('UserId', validators=[DataRequired()])
    product_id = IntegerField('ProductId', validators=[DataRequired()])
    quantity = IntegerField('Quantity', validators=[DataRequired()])
