import { legacy_createStore, applyMiddleware } from 'redux';
import blogReducer from './Reducer';
import logger from 'redux-logger';

// const rootReducer = combineReducers({
//   blog: blogReducer,
// });

// const store = legacy_createStore(rootReducer);

const store = legacy_createStore(blogReducer, applyMiddleware(logger));

export default store;
