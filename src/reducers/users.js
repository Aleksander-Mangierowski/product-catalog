import {
    SIGN_USER_OUT_SUCCESS,
    SIGN_USER_IN_REQUEST,
    SIGN_USER_IN_SUCCESS,
    SIGN_USER_UP_REQUEST,
    SIGN_USER_UP_SUCCESS
} from '../constants/users'

const initialState = {
    // user: null,
    isAuth: false,
    userIsLoading: false
}

export default (state = initialState, action) => {

    switch (action.type) {

        case SIGN_USER_OUT_SUCCESS:
            return {
                ...state,
                isAuth: action.payload,
            }

        case SIGN_USER_IN_REQUEST:
            return {
                ...state,
                userIsLoading: true
            }

        case SIGN_USER_IN_SUCCESS:
            return {
                ...state,
                isAuth: action.payload,
                userIsLoading: false
            }

        case SIGN_USER_UP_REQUEST:
            return {
                ...state,
                userIsLoading: true
            }

        case SIGN_USER_UP_SUCCESS:
            return {
                ...state,
                isAuth: action.payload,
                userIsLoading: false
            }

        default:
            return state
    }
}