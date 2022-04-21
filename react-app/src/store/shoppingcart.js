const LOAD_SHOPPINGCART = 'shoppingcart/LOAD';
const DELETE_ONE_SHOPPINGCART = 'shoppingcart/DELETEONE';
const DELETE_ALL_SHOPPINGCART = 'shoppingcart/DELETEALL';
const CREATE_SHOPPINGCART = 'shoppingcart/CREATEONE';
const UPDATE_SHOPPINGCART ='shoppingcart/UPDATEONE';


const loadShoppingcart = (shoppingcartproducts) => ({
    type: LOAD_SHOPPINGCART,
    shoppingcartproducts
})

const deleteoneshoppingcartaction = (id) => ({
    type: DELETE_ONE_SHOPPINGCART,
    cartId: id
})

const deleteallshoppingcartaction = (arrayIds) => ({
    type: DELETE_ALL_SHOPPINGCART,
    arrayIds
})

const createoneshoppingcaraction = (shoppingcartproduct) => ({
    type: CREATE_SHOPPINGCART,
    shoppingcartproduct
})

const updateQuantityShoppingCart = (thing) => ({
    type: UPDATE_SHOPPINGCART,
    thing
})


export const shoppingcartLoad = () => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/');


    if (response.ok) {
        const data = await response.json();
        dispatch(loadShoppingcart(data.allCartProduct))
    }
}

export const shoppingcartDeleteone = (id) => async (dispatch) => {
    const response = await fetch(`/api/shoppingcart/delete/${id}/`, {
        method:"DELETE"
    });


    if (response.ok) {
        const data = await response.json();
        dispatch(deleteoneshoppingcartaction(data.id))
    }
}

export const shoppingcartdeleteall = () => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/deleteall/',{
        method:"DELETE"
    });


    if (response.ok) {
        const data = await response.json();
        dispatch(deleteallshoppingcartaction(data.arrayIds))
    }
}

export const createshoppingcart = (product_id,quantity) => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            product_id,
            quantity
        })
    });


    if (response.ok) {
        const data = await response.json();
        dispatch(createoneshoppingcaraction(data))
    }
}

export const updateShoppingcart = (id,product_id,quantity) => async (dispatch) => {
    const response = await fetch(`/api/shoppingcart/update/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            product_id,
            quantity
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(updateQuantityShoppingCart(data))
    }
}


const shoppingcartreducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_SHOPPINGCART:
            action.shoppingcartproducts.forEach(ele => {
                newState[ele.id] = ele
            });
            return { ...newState }
        case DELETE_ONE_SHOPPINGCART:
            delete newState[action.cartId]
            return newState;
        case DELETE_ALL_SHOPPINGCART:
            action.arrayIds.forEach(ele => {
                delete newState[ele]
            })
            return newState
        case CREATE_SHOPPINGCART:
            newState[action.shoppingcartproduct.id] = action.shoppingcartproduct;
            return newState
        case UPDATE_SHOPPINGCART:
            newState[action.thing.id] = action.thing;
            return newState
        default:
            return state
    }
}

export default shoppingcartreducer
