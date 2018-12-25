import React from "react";
import classes from './CartItem.module.css';

const CartItem = () => (
  <div class={classes.CartItem}>
    <i class={"far fa-dot-circle "+classes.Icon} />
    <p class={classes.Recipe}>Tandoori Chicken</p>
    <div class={classes.AddRemoveBox}>
      <i class="fas fa-minus restaurant__cart__item__add__icon" />
      <p class="restaurant__cart__item__add-remove__number">1</p>
      <i class="fas fa-plus restaurant__cart__item__remove__icon" />
    </div>
    <p class={classes.Price}>&#8377;123</p>
  </div>
);

export default CartItem;
