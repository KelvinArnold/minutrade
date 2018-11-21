import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Imort Views
import { ProductsContainer } from './../components/Products';
import { AddressContainer } from './../components/Address';
import { Home } from './../components/Home';
import { NotFound } from './../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/404" component={NotFound}></Route>
      <Route path="/products" component={ProductsContainer}></Route>
      <Route path="/address" component={AddressContainer}></Route>
      <Redirect to="/404"/>
    </Switch>
  )
}

export default Routes;
