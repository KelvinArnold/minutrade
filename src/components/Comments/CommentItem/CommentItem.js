import React, { Component } from 'react'
import { dateFormat } from './../../../helpers';

class CommentItem extends Component {
  render() {
    return (
      <div className="media pb-3 mb-3 border-bottom">
        <div className="media-body text-italic">
          <p className="mb-0"><strong>Publicado por: </strong>{this.props.user}</p>
          <small className="tc-grey font-italic">{dateFormat(this.props.date, true)}</small>
          <p className="mt-2 mb-2">{this.props.comment}</p>
        </div>
      </div>
    )
  }
}

export default CommentItem;
