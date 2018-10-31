import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(thunkMiddleware, logger)
  );
  
  return store;
}