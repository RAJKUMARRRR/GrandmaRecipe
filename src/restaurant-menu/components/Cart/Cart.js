import React from "react";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import Button from '../../../components/Button/Button';

class Cart extends React.Component {
  render() {
    return (
      <div className={classes.Cart}>
        <div className={classes.Wrapper}>
          <p className={classes.Title}>Cart</p>
          <p className={classes.TotalItems}>2 ITEMS</p>
          <div className={classes.CartItems}>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </div>
          <p className={classes.TotalPrice}>
            <span className={classes.TotalPriceText}>Subtotal</span>
            <span className={classes.TotalPriceText}>&#8377; 228</span>
          </p>
          <p className={classes.ExtraCharges}>Extra charges may apply</p>
          <Button className={classes.CheckoutButton}>CHECKOUT</Button>
        </div>
      </div>
    );
  }
}

export default Cart;
