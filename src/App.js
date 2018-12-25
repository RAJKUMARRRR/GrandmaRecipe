import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import Auth from './auth/Auth';
import {Route,Switch,Link,Redirect} from 'react-router-dom';

import Restaurants from './restaurants/Restaurants';
import RestaurantMenu from './restaurant-menu/RestaurantMenu';
import Checkout from './checkout/Checkout';


class App extends Component {
  componentDidMount(){
    console.log("App:ComponentDidMount----->",this.props);
  }
  render() {
    return (
      <div className="App">
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth}/>      
          <Route path="/restaurants/:id" component={RestaurantMenu}/>      
          <Route path="/restaurants" component={Restaurants}/>      
          <Route path="/restaurants" component={Restaurants}/>      
          <Route path="/checkout" component={Checkout}/>      
        </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
