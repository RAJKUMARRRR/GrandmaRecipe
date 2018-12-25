import React from "react";
import classes from './MenuItem.module.css';

const MenuItem = () => (
  <div class={classes.MenuItem}>
    <i class={"far fa-dot-circle " + classes.Icon} />
    <div class={classes.Details}>
      <p class={classes.MenuItemTitle}>Chilli Paneer</p>
      <p class={classes.Price}>&#8377;229.00</p>
      <p class={classes.Description}>
        Work tossed cubes of deep fried paneer, coated with tangy chilli sauce
      </p>
      <p class={classes.Customization}>customization available</p>
    </div>
    <button class={classes.Add}>ADD</button>
  </div>
);

export default MenuItem;
