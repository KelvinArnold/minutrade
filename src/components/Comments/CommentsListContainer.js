import _ from 'lodash';
import { connect } from 'react-redux';
import CommentList from './CommentList';
import { fetchComment } from './../../actions/action-comments';

const mapStateToProps = ({comments}, ownprops) => ({
  comments: _.filter(comments, {'productId': ownprops.productId})
})

const CommentsListContainer = connect(
  mapStateToProps,
  {fetchComment}
)(CommentList);

export default CommentsListContainer;
