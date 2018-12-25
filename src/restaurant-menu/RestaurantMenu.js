import React from "react";
import classes from './RestaurantMenu.module.css';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

class RestaurantMenu extends React.Component {
  render() {
    return (
      <section class={classes.RestaurantMenu}>
        <RestaurantDetails/>        
        <div class={classes.RestaurantMain}>
         <Menu/>          
         <Cart/>
        </div>
      </section>
    );
  }
}

export default RestaurantMenu;
