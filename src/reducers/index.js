import { combineReducers } from 'redux';
import products from './products';
import reviews from './reviews';
import users from './users';

export default combineReducers({
    products,
    reviews,
    users,
});