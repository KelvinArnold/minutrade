import _ from 'lodash';
// import Actions Types
import { FETCH_COMMENT, CREATE_COMMENT } from './../actions/action-types';
// Initial State
const initialState = {}
// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_COMMENT:
    const comments = _.mapKeys(action.payload.data, 'id');
    return {
      ...state,
      ...comments
    }
  case CREATE_COMMENT:
    const data = _.mapKeys([action.payload.data], 'id');
    return {
      ...state,
      ...data
    }
  default:
    return state
  }
}
