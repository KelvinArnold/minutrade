import React from 'react'
// @items = String Array
export default ({items}) => {
  return (
    <ul className="list-group">
      {
        items.forEach((item, index) => {
          return (
            <li key={index}
              className="list-group-item list-group-item-action">
              {item}
            </li>
          )
        })
      }
    </ul>
  )
}
