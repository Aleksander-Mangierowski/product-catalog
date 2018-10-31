import requestHandler from '../utils/requestHandler';
import {
    GET_PRODUCTS_ATTEMPT,
    GET_PRODUCTS_SUCCESS,
} from '../constants/products'


export const getProductsAttempt = () => {

    return {
        type: GET_PRODUCTS_ATTEMPT,
    }
}


export const getProducts = () => {
    return dispatch => {

        dispatch(getProductsAttempt());

        const getProductsSuccess = response => {

            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: response.data,
            });
        }

        requestHandler({
            method: 'get',
            url: 'products/',
        }, getProductsSuccess);
    };
}