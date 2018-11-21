import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
// Import styles
import './../../assets/scss/app.scss';
// Import router
import { BrowserRouter } from 'react-router-dom';
import Routes from "./../../routes";
// Import Components
import { Header } from './../Header';
import { Footer } from './../Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter
        basename="/">
        <div className="container-fluid">
          <div className="column">
            <Header logo={logo}/>
              {/* Body Content */}
              <div className="row">
                <div className="d-flex w-100 justify-content-center pt-3 pb-3">
                  {/* Get all App Routers */}
                  <div className="col-12 col-lg-10 p-0 mb-4">
                    <Routes/>
                  </div>
                </div>
              </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
