import _ from 'lodash';
import React, { Component } from 'react';
import {ProductItem} from './ProductItem/';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  renderProduct() {
    const { products } = this.props;
    if (!products) {
      return (
        <div className="">
          Loading...
        </div>
      )
    }
    return _.map(products, product => {
      return (
        <ProductItem
          productId={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          comments={product.comments}
          key={product.id}></ProductItem>
      )
    });
  }
  render() {
    return (
      <div className="col-12 pt-3 pb-3">
        <h4 className="mb-3">Lista de Productos</h4>
        {this.renderProduct()}
      </div>
    )
  }
}

export default Product;