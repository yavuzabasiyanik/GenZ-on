from flask import Blueprint, jsonify, session, request
from app.models import Reviews, db
from app.forms import ReviewForm
from flask_login import current_user, login_user, logout_user, login_required

reviews_routes = Blueprint('review', __name__)


def error_thingy(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@reviews_routes.route('/', methods=["GET"])
def getAllReviews():

    allReviews = Reviews.query.all()

    return {'allReviews': [review.to_dict() for review in allReviews]}


@reviews_routes.route('/', methods=["POST"])
def postReview():

    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Reviews(
            user_id = current_user.id,
            product_id = form.data['product_id'],
            rating = form.data['rating'],
            title = form.data['title'],
            body = form.data['body']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()

    return {'errors': error_thingy(form.errors)}, 401


@reviews_routes.route('/delete/<review_id>', methods=['DELETE'])
def deleteReview(review_id):

    review = Reviews.query.get(review_id)

    db.session.delete(review)
    db.session.commit()
    return {"id": review_id}



@reviews_routes.route('/update/<review_id>', methods=['PUT'])
def reviewUpdate(review_id):

    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        review = Reviews.query.get(review_id)

        review.title = form.data['title']
        review.body = form.data['body']
        review.rating = form.data['rating']

        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': error_thingy(form.errors)}, 401
