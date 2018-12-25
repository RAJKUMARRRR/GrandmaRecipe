import React from "react";
import classes from "./Bank.module.css";

const Bank = () => {
  return (
    <div className={classes.Bank}>
      <div className={classes.ImageBox}>
        <img
          src="https://b.zmtcdn.com/images/bank-logos/CID010_1.png"
          alt="Paytm Logo"
          className={classes.Image}
        />
      </div>
      <p className={classes.Title}>HDFC Bank</p>
    </div>
  );
};


export default Bank;
