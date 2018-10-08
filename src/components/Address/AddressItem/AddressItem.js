import React from 'react'

export default ({store, address}) => {
  return (
    <div className="list-group-item list-group-item-action">
      <strong>{store}</strong>
      <span className="d-block">{address}</span>
    </div>
  )
}
