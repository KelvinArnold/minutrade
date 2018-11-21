import React, { Component } from 'react'
import { CURRENT_USER } from './../../../constants';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }
  onInputChange(e) {
    this.setState({
      comment: e.target.value
    })
  }
  cancelComment() {
    this.setState({
      comment: ''
    })
  }
  sendComment(e) {
    e.preventDefault();
    const { productId } = this.props;
    const comment = {
      productId,
      user: CURRENT_USER,
      comment: this.state.comment,
      date: new Date()
    };
    this.props.createComment(comment);
    this.cancelComment();
  }
  render() {
    return (
      <div className="media mt-4">
        <div className="media-body">
          <p className="mb-2">
            <strong>Usuario: {CURRENT_USER}</strong>
          </p>
          <form onSubmit={this.sendComment.bind(this)}>
            <div className="form-group text-right">
              <textarea
                className="form-control"
                rows="4"
                value={this.state.comment}
                onChange={this.onInputChange.bind(this)}
                placeholder="Adicione seu comentario aqui"></textarea>
              <p className="mb-0 font-italic">
                <small>Words: {this.state.comment.length}</small>
              </p>
              <div className="mt-3">
                <button className="btn btn-sm btn-white mr-2"
                  onClick={this.cancelComment.bind(this)}>Cancel</button>
                <button className="btn btn-sm btn-primary"
                  disabled={!this.state.comment.length}
                  type="submit">
                  Send Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CommentForm;