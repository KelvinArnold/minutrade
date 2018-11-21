import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import { createComment } from './../../../actions/action-comments';

const CommentFormContainer = connect(
  null,
  { createComment }
)(CommentForm)

export default CommentFormContainer;
