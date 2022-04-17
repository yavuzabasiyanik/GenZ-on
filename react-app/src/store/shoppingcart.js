const LOAD_SHOPPINGCART = 'shoppingcart/LOAD';


const loadShoppingcart = (shoppingcartproducts) => ({
    type: LOAD_SHOPPINGCART,
    shoppingcartproducts
})



export const shoppingcartLoad = () => async (dispatch) => {
    const response = await fetch('/api/shoppingcart/');


    if( response.ok){
        const data = await response.json();
        dispatch(loadShoppingcart(data.allCartProduct))
    }
}


const shoppingcartreducer = (state = {}, action) => {
    let newState = {...state};

    switch(action.type) {
        case LOAD_SHOPPINGCART:
            action.shoppingcartproducts.forEach(ele => {
                newState[ele.id] = ele
            });
            return {...newState}
        default:
            return state
    }
}

export default shoppingcartreducer
