import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({logo}) => {
  return (
    <div className="row">
      <header className="d-flex w-100 justify-content-center bg-light border-bottom">
        <nav className="col-12 col-lg-10 navbar navbar-expand-sm">
          <Link to="/" className="navbar-brand tc-primary">
            Minutrade
          </Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/products" className="nav-link tc-black">
                  Produtos
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/address" className="nav-link tc-black">
                  Lojas Físicas
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
