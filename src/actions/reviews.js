import requestHandler from '../utils/requestHandler';
import {
    GET_REVIEWS_ATTEMPT,
    GET_REVIEWS_SUCCESS,
    POST_REVIEW_ATTEMPT,
    POST_REVIEW_SUCCESS,
} from '../constants/reviews'


export const getReviewsAttempt = () => {

    return {
        type: GET_REVIEWS_ATTEMPT,
    }
}


export const getReviews = id => {
    return dispatch => {

        dispatch(getReviewsAttempt());

        const getReviewsSuccess = response => {

            dispatch({
                type: GET_REVIEWS_SUCCESS,
                payload: response.data,
            });
        }

        requestHandler({
            method: 'get',
            url: 'reviews/' + id/*  + '/' */,
        }, getReviewsSuccess);
    };
}

export const postReviewAttempt = () => {

    return {
        type: POST_REVIEW_ATTEMPT,
    }
}


export const postReview = (id, data) => {
    return dispatch => {

        dispatch(postReviewAttempt());

        const postReviewSuccess = response => {

            dispatch({
                type: POST_REVIEW_SUCCESS,
            });
            
            dispatch(getReviews(id));
        }

        requestHandler({
            method: 'post',
            url: 'reviews/' + id/*  + '/' */,
            data
        }, postReviewSuccess);
    };
}