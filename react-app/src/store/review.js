const LOAD_REVIEWS = 'reviews/getAll'
const CREATE_REVIEW = 'reviews/createone';
const UPDATE_REVIEW = 'reviews/updateone';
const DELETE_REVIEW = 'reviews/deleteone';



const getAlreviewsAction = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
})

const createOneReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

const updateOneReview = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const deleteOneReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})




export const getAllReviews = () => async (dispatch) => {

    const response = await fetch('/api/reviews/');

    if (response.ok) {
        const data =  await response.json();

        if (data.errors) {
            return data.errors;
        }
        dispatch(getAlreviewsAction(data.allReviews))
    }
    return
}

export const createReview = (product_id, rating, title, body) => async (dispatch) => {

    const response = await fetch('/api/reviews/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            product_id,
            rating,
            title,
            body
        })

    });

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
        dispatch(createOneReview(data))
    }
    
    return
}


export const updateReview = (product_id, rating, title, body, review_id) => async (dispatch) => {

    const response = await fetch(`/api/reviews/update/${review_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            product_id,
            rating,
            title,
            body
        })

    });

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
        dispatch(updateOneReview(data))
    }
    return
}

export const deleteReview = (review_id) => async (dispatch) => {

    const response = await fetch(`/api/reviews/delete/${review_id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }
        dispatch(deleteOneReview(data.id))
    }
    return
}



const reviewReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_REVIEWS:
            action.reviews.forEach(ele => {
                newState[ele?.id] = ele
            });
            return { ...newState }
        case CREATE_REVIEW:
            newState[action.review.id] = action.review
            return { ...newState }
        case UPDATE_REVIEW:

            newState[action.review.id] = action.review
            return { ...newState }

        case DELETE_REVIEW:
            delete newState[action.reviewId]
            return { ...newState }
        default:
            return state;
    }

}

export default reviewReducer
