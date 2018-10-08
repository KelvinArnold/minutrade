import _ from 'lodash';
// import Actions Types
import { FETCH_PRODUCTS } from './../actions/action-types';
// Initial State
const initialState = {};
// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_PRODUCTS:
    const {data} = action.payload;
    return _.mapKeys(data, 'id');
  default:
    return state;
  }
}
