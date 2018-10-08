// Import all Action Type
import { FETCH_PRODUCTS } from './action-types';
import { HTTP } from './../service/http';

const fetchProducts = () => {
  const req = HTTP.get(`/products`);
  return {
    type: FETCH_PRODUCTS,
    payload: req
  }
};

// Export All Actions
export {
  fetchProducts
};