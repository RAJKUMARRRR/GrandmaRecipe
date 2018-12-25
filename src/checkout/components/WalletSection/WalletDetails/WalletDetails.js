import React from "react";
import classes from "./WalletDetails.module.css";

const WalletDetails = () => (
  <div className={classes.WalletDetails}>
    <p className={classes.Title}>
      Recharge your Paytm wallet ot pay for your order
    </p>
    <div className={classes.Amount}>
      <div className={classes.AmountBox}>
        <p>&#8377;</p>
        <input
          type="decimal"
          className={classes.AmountInput}
        />
      </div>
      <div className={classes.RechargeGuideline}>
        Click Recharge Wallet and Place Order.
      </div>
      <div className={classes.RechargeButton}>
        Recharge Wallet and Place Order
      </div>
    </div>
  </div>
);

export default WalletDetails;
