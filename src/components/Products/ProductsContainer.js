import { connect } from 'react-redux';
import Products from './Products';
import { fetchProducts } from './../../actions/action-products';

const mapStateToProps = ({products}) => ({
  products
})

const ProductListContainer = connect(
  mapStateToProps,
  {fetchProducts}
)(Products)

export default ProductListContainer;
