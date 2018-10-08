import axios from 'axios';

const API = 'https://minutrade-api.herokuapp.com/api';

const config = {
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
}
// Create new Axios Instance
const HTTP = axios.create(config);
export {
  HTTP
};