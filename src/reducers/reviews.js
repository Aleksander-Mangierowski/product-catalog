import {
    GET_REVIEWS_ATTEMPT,
    GET_REVIEWS_SUCCESS,
    POST_REVIEW_ATTEMPT,
    POST_REVIEW_SUCCESS,
} from '../constants/reviews'


const initialState = {
    reviews: [],
    reviewsAreLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_REVIEWS_ATTEMPT:
            return { ...state,
                reviewsAreLoading: true
            };

        case GET_REVIEWS_SUCCESS:
            return {
                reviews: action.payload,
                reviewsAreLoading: false
            };
        
        case POST_REVIEW_ATTEMPT:
            return { ...state,
                reviewsAreLoading: true
            };

        case POST_REVIEW_SUCCESS:
            return { ...state,
                reviewsAreLoading: false
            };


        default:
            return state;
    }
}