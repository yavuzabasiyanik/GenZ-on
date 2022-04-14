from flask_wtf import FlaskForm
from wtforms import StringField , IntegerField, TextAreaField, SelectField
from wtforms.validators import DataRequired, ValidationError, Length, URL
from app.models import User


def img_check(form ,field):
    url = field.data

    if not (url[-3:] in 'png pd jpg jpeg gif' ):
        raise ValidationError('Images Only!')

def price_check(form,field):
    price = field.data

    if price <1 or price > 10000:
        raise ValidationError('Price should be between 1-10000')


class ProductForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=0, max=500)])
    description = TextAreaField('Description', validators=[DataRequired()])
    image_url = StringField('Imageurl', validators=[img_check, DataRequired(), URL()])
    price = IntegerField('Price', validators=[DataRequired(),price_check ])
    quantity = IntegerField('Quantity', validators=[DataRequired()])
    category = StringField('Category',  validators=[DataRequired()])
