import React from 'react'
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className="row minu-trade-footer">
      <div className="d-flex w-100 justify-content-center bg-black fixed-bottom">
        <nav className="col-12 col-lg-10 navbar navbar-expand-sm">
          <Link to="/" className="navbar-brand tc-white">
            <small>Minutrade</small>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/products" className="nav-link tc-white">
                  Produtos
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/address" className="nav-link tc-white">
                  Lojas Físicas
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
