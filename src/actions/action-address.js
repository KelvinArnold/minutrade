// Import all Action Type
import {FETCH_ADDRESS} from './action-types';
import {HTTP} from './../service/http';

const fetchAddress = () => {
  const req = HTTP.get(`/address`);
  return {
    type: FETCH_ADDRESS,
    payload: req
  }
}

export {
  fetchAddress
}