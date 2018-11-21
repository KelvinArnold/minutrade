import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="col-12">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/products" className="tc-black">Lista de Produtos</Link>
            <Link to="/products" className="tc-black">Lista de Produtos 2</Link>
          </li>
          <li className="list-group-item">
            <Link to="/address" className="tc-black">Lojas Fisicas</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default  Home;