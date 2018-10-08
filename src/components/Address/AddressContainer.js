import { connect } from 'react-redux';
import Address from './Address';
import { fetchAddress } from './../../actions/action-address';

const mapStateToProps = ({address}) => ({
  address
});

const AddressContainer = connect(
  mapStateToProps,
  {fetchAddress}
)(Address)

export default AddressContainer;
