import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.Card}>
      <div className={classes.ImageBox}>
        <img
          src="https://b.zmtcdn.com/images/visa.png"
          alt="Paytm Logo"
          className={classes.Image}
        />
      </div>
      <div className={classes.CardDetails}>
        <p className={classes.CardName}>Personal</p>
        <p className={classes.CardNumber}>4123 4533 4543</p>
      </div>
      <p className={classes.CVVTitle}>Please confirm your CVV:</p>
      <input type="decimal" placeholder="CVV" className={classes.CVVInput}/>
    </div>
  );
};

export default Card;
