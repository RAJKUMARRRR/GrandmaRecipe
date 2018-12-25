import React from "react";
import classes from "./OrderItem.module.css";

const OrderItem = () => (
  <div className={classes.OrdersListItem}>
    <div className={classes.OrdersListItemCol1}>
      <i className={"far fa-dot-circle " + classes.OrdersListItemIcon} />
      <div>
        <p className={classes.OrdersListItemName}>
          Chef'S Special Chicken Thali
        </p>
        <div className={classes.OrdersListItemQuantity}>1 * 185.00</div>
      </div>
    </div>
    <p className={classes.OrdersListItemPrice}>185.00</p>
  </div>
);

export default OrderItem;
