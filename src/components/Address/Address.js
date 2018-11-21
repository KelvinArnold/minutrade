import React, { Component } from 'react'
import { AddressItem } from './AddressItem';
import { NOT_FOUND_ADDRESS } from './../../constants';

class Address extends Component {
  componentDidMount() {
    this.props.fetchAddress();
  }
  renderAddressItem() {
    const {address} = this.props;
    if (!address.length) {
      return <small>{NOT_FOUND_ADDRESS}</small>
    }
    return address.map((a, key) => {
      return (
        <AddressItem
          key={key}
          store={a.store}
          address={a.address}></AddressItem>
      )
    })
  }
  render() {
    return (
      <div className="col-12 pt-3 pb-3">
        <h4 className="mb-3">Nossas Lojas Fisicas</h4>
        <div className="address-container border-top pt-4 pb-4">
          <div className="list-group">
            {this.renderAddressItem()}
          </div>
        </div>
      </div>
    )
  }
}

export default Address;