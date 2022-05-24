const LOAD_PRODUCTS = 'products/LOAD';
const CREATE_PRODUCT = 'products/CREATE';
const DELETE_PRODUCT = 'products/DELETE';
const UPDATE_PRODUCT = 'products/UPDATE';


const loadProduct = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

const createProducAction = (product) => ({
    type: CREATE_PRODUCT,
    product
})

const deleteProductAction = (id) => ({
    type: DELETE_PRODUCT,
    id
})

const updateProductAction = (product) => ({
    type: UPDATE_PRODUCT,
    product
})

export const deleteProduct = (id) => async (dispatch) => {
    const response = await fetch(`/api/products/delete/${id}`, {
        method: "DELETE"
    });


    if (response.ok) {
        const data = await response.json();

        dispatch(deleteProductAction(data.id));
    }
    return response
}


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


export const createProduct = (payload) => async (dispatch) => {
    const response = await fetch('/api/products/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
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

export const updateProduct = (name, description, price, image_url, quantity, category, product_id) => async (dispatch) => {
    const response = await fetch(`/api/products/update/${product_id}`, {
        method: 'PUT',
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

        dispatch(updateProductAction(data));
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
            // return newState;
            return { ...newState }

        case UPDATE_PRODUCT:
            newState[action.product.id] = action.product;
            // return newState;
            return { ...newState }

        case DELETE_PRODUCT:
            delete newState[action.id];
            // return newState;
            return { ...newState }

        default:
            return state;
    }
};

export default productReducer;
