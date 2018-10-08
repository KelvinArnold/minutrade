import { FETCH_ADDRESS } from './../actions/action-types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
  case FETCH_ADDRESS:
    const data = action.payload.data;
    return data;
  default:
    return state
  }
}
