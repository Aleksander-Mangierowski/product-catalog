import requestHandler from '../utils/requestHandler'
import {
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_ERROR,
    SIGN_USER_OUT_REQUEST,
    SIGN_USER_OUT_SUCCESS,
    SIGN_USER_IN_REQUEST,
    SIGN_USER_IN_SUCCESS,
    SIGN_USER_UP_REQUEST,
    SIGN_USER_UP_SUCCESS
} from '../constants/users'


export const getAuthUser = () => {

    return (dispatch) => {

        const handleAuthRequest = (response) => {
            dispatch({
                type: GET_AUTH_USER_SUCCESS,
                payload: response.data
            })
        }

        dispatch({
            type: GET_AUTH_USER_REQUEST
        })

        requestHandler({
            method: 'get',
            url: 'getAuth'
        }, handleAuthRequest)

    }
}

export const signUserOut = () => {

    return (dispatch) => {

        window.token = '';
        
        dispatch({
            type: SIGN_USER_OUT_SUCCESS,
            payload: false,
        })
    }
}

export const signUserIn = data => {

    return (dispatch) => {

        const handleSignInRequest = (response) => {
            if (response.data.success) {
                window.token = response.data.token;
            } else {
                alert(response.data.message);
            }

            dispatch({
                type: SIGN_USER_IN_SUCCESS,
                payload: response.data.success,
            });
        };

        dispatch({
            type: SIGN_USER_IN_REQUEST
        });

        requestHandler({
            method: 'post',
            url: 'login/',
            data: data
        }, handleSignInRequest);

    }
}

export const signUserUp = data => {

    return (dispatch) => {

        const handleSignUpRequest = (response) => {
            if(response.data.success) {
                window.token = response.data.token;
            } else {
                alert(response.data.message);
            }

            dispatch({
                type: SIGN_USER_UP_SUCCESS,
                payload: response.data.success,
            });


        };

        dispatch({
            type: SIGN_USER_UP_REQUEST
        });

        requestHandler({
            method: 'post',
            url: 'register/',
            data: data
        }, handleSignUpRequest);
    }
}