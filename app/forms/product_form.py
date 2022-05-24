from flask_wtf import FlaskForm
from wtforms import StringField , IntegerField, TextAreaField, SelectField
from wtforms.validators import DataRequired, ValidationError, Length, URL
from app.models import User


def img_check(form ,field):
    url = field.data

    if not ('png' in url or 'pd' in url or 'jpg' in url or 'jpeg' in url or 'gif' in url):
        raise ValidationError('Images Only!')

def price_check(form,field):
    price = field.data

    if price <1 or price > 10000:
        raise ValidationError('Price must be between 1-10000')

def quantity(form,field):
    quantity = field.data

    if quantity <1 or quantity > 10:
        raise ValidationError('Quantity must be between 1-10')



class ProductForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=4, max=80)])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=4, max=1001)])
    price = IntegerField('Price', validators=[DataRequired(),price_check ])
    image_url = StringField('image',validators=[DataRequired(), img_check])
    quantity = IntegerField('Quantity', validators=[DataRequired(),quantity])
    category = StringField('Category',  validators=[DataRequired()])
