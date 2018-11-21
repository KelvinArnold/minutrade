// Import all Action Type
import { CREATE_COMMENT, FETCH_COMMENT } from './action-types';
import { HTTP } from './../service/http';

const fetchComment = (id) => {
  const req = HTTP.get(`/comments/${id}`);
  return {
    type: FETCH_COMMENT,
    payload: req
  }
}
const createComment = (comment) => {
  const req = HTTP.post(`/comments`, comment);
  return {
    type: CREATE_COMMENT,
    payload: req
  }
}
export {
  fetchComment,
  createComment
}