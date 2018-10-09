import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: false
    };
    this.menuRef = React.createRef();
  }
  showMenu() {
    this.setState({ showHeader: !this.state.showHeader });
    this.menuRef.current.style.display = this.state.showHeader ? 'block' : 'none';
  }
  render() {
    return (
      <div className="row">
        <header className="d-flex w-100 justify-content-center bg-light border-bottom">
          <nav className="col-12 col-lg-10 navbar navbar-expand-sm">
            <Link to="/" className="navbar-brand tc-primary">
              Minutrade
            </Link>
            <button
              className="navbar-toggler pr-0 pl-0"
              type="button"
              onClick={this.showMenu.bind(this)}>
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" ref={this.menuRef}>
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
}

export default Header;
