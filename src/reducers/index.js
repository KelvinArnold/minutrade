import { combineReducers } from 'redux';
// Import all reducers here
import productReducer from './reducer-products';
import commentsReducer from './reducer-comments';
import addressReducer from './reducer-address';

const appReducer = combineReducers({
  products: productReducer,
  comments: commentsReducer,
  address: addressReducer
})

export default appReducer;