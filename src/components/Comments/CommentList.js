import _ from 'lodash';
import React, { Component } from 'react';
import { CommentItem } from './CommentItem';
import { CommentFormContainer } from './CommentForm';
import { NOT_FOUND_COMMENTS } from './../../constants';

class CommentList extends Component {
  componentDidMount() {
    const {productId} = this.props;
    this.props.fetchComment(productId);
  }
  renderComments() {
    const { comments } = this.props;
    if (!comments.length) {
      return (
        <div className="">
          {NOT_FOUND_COMMENTS}
        </div>
      )
    }
    return _.map(comments, (comment, key) => {
      return (
        <CommentItem
          user={comment.user}
          comment={comment.comment}
          date={comment.date}
          key={key}></CommentItem>
      )
    })
  }
  render() {
    return (
      <div className="col-12 pl-3 pr-3 pt-3 mt-3 mb-3">
        <h5 className="mb-3">Lista de commentarios</h5>
        {this.renderComments()}
        <CommentFormContainer 
          productId={this.props.productId}
          ></CommentFormContainer>
      </div>
    )
  }
}

export default CommentList;