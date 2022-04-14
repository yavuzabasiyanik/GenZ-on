const LOAD_PRODUCTS = 'products/LOAD';
const CREATE_PRODUCT = 'products/CREATE';


const loadProduct = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

const createProducAction = (product) => ({
    type: CREATE_PRODUCT,
    product
})


export const productLoad = () => async (dispatch) => {
    const response = await fetch('/api/products/');


    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
        dispatch(loadProduct(data.allProducts));
    }
}


export const createProduct = (name, description, price, image_url, quantity, category) => async (dispatch) => {
    const response = await fetch('/api/products/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            description,
            image_url,
            price,
            quantity,
            category
        })
    })

    if (response.ok) {
        const data = await response.json();

        dispatch(createProducAction(data));
    } else {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }

    }
}


const initialState = {};

const productReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_PRODUCTS:
            action.products.forEach(product => {
                newState[product.id] = product;
            });
            return { ...newState };
        case CREATE_PRODUCT:
            newState[action.product.id] = action.product;
            return newState;
        // case UPDATE_product:
        //     newState[action.product.id] = action.product;
        //     return newState;
        // case DELETE_product:
        //     delete newState[action.id];
        //     return newState;
        default:
            return state;
    }
};

export default productReducer;
