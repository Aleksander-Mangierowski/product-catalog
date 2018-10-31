import {
    GET_PRODUCTS_ATTEMPT,
    GET_PRODUCTS_SUCCESS,
} from '../constants/products'


const initialState = {
    products:[],
    productsAreLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS_ATTEMPT:
            return {...state, productsAreLoading: true};

        case GET_PRODUCTS_SUCCESS:
            return {products: action.payload, productsAreLoading: false};
            
    
        default:
            return state;
    }
}