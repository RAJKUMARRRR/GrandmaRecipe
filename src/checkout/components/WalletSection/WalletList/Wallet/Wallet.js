import React from "react";
import classes from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={classes.Wallet}>
      <div className={classes.ImageBox}>
        <img
          src="https://b.zmtcdn.com/payments/wallet-logos/paytm.png"
          alt="Paytm Logo"
          className={classes.Image}
        />
      </div>
      <p className={classes.Title}>Paytm</p>
      <p className={classes.Balance}>
        &#8377;0.00
      </p>
    </div>
  );
};

export default Wallet;
