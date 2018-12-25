import React from "react";
import classes from './OrderSummery.module.css';
import OrderItem from './OrderItem/OrderItem';

class OrderSummery extends React.Component {
  render() {
    return (
      <div className={classes.OrderSummery}>
        <div className={classes.Details}>
          <h2>
            <span>Personal Details</span>
            <span className="checout__summery__details__edit">(Edit)</span>
          </h2>
          <p className="checout__summery__details__label">Rajkumar Chinthala</p>
          <p className="checout__summery__details__label">8501096987</p>
          <h2>
            <span>Delivery Address</span>
            <span className="checout__summery__details__edit">(Edit)</span>
          </h2>
          <p className="checout__summery__details__label">Address Line 1</p>
          <p className="checout__summery__details__label">Address Line 2</p>
        </div>

        <div className={classes.Orders}>
          <div className={classes.OrdersTitle}>Your Order</div>

          <div className={classes.OrdersList}>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
          </div>
        </div>

        <div className={classes.Billing}>
          <div className={classes.BillingWrapper}>
            <div className={classes.BillingCol1}>
              <p className={classes.BillingPrimary}>Subtotal</p>
              <p className={classes.BillingSecondary}>
                Delivery Charge
              </p>
              <p className={classes.BillingSecondary}>
                Packaging Charge
              </p>
              <p className={classes.BillingSecondary}>Taxes</p>
            </div>
            <div className={classes.BillingCol2}>
              <p className={classes.BillingPrimary}>185.00</p>
              <p className={classes.BillingSecondary}>10.00</p>
              <p className={classes.BillingSecondary}>10.00</p>
              <p className={classes.BillingSecondary}>9.25</p>
            </div>
          </div>
          <div className={classes.BillingTotalBill}>
            <p className={classes.BillingPrimary}>Total</p>
            <p className={classes.BillingPrimary}>214.25</p>
          </div>
          <div className={classes.RechargeButton}>
            Pay Via Bank
          </div>
        </div>
      </div>
    );
  }
}

export default OrderSummery;
