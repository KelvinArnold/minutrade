import React, { Component } from 'react'
import { CommentsListContainer } from "./../../Comments";
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsVisisble: false
    }
  }
  getComments() {
    console.log(`Get Comments: ${this.props.productId}`);
    this.setState({
      commentsVisisble: !this.state.commentsVisisble
    })
  }
  renderComments() {
    const {commentsVisisble} = this.state;
    if (!commentsVisisble) {
      return false;
    }
    return (
      <div className="bg-light rounded">
        <CommentsListContainer
          productId={this.props.productId}></CommentsListContainer>
      </div>
    )
  }
  render() {
    return (
      <div className="media mb-3 border-top pt-4 pb-2">
        <img className="mr-3"
          src={this.props.image} 
          alt="dummyimage.com"
          width="120"></img>
        <div className="media-body">
          <h5>{this.props.title}</h5>
          <small className="tc-grey">Descrição</small>
          <p className="mb-2">{this.props.description}</p>
          <button
            className="btn btn-sm border tc-primary"
            onClick={this.getComments.bind(this)}>
            <i className="fa fa-comments"></i> Ver comentarios
          </button>
          {/* Comments List */}
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

export default ProductItem;