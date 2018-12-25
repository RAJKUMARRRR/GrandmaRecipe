import React from "react";
import classes from "./NewCard.module.css";

const NewCard = () => (
  <React.Fragment>
    <div className={classes.AddNewCardButton}>
      Add another card
    </div>
    <div className={classes.NewCard}>
      <div className={classes.Row1}>
        <div className={classes.CardNumberWrapper}>
          <p className={classes.InputTitle}>Card Number</p>
          <input type="password" className={classes.Input} />
        </div>
        <div className={classes.ExpiryDateWrapper}>
          <p className={classes.InputTitle}>Expiry Date</p>
          <input type="decimal" className={classes.Input} placeholder="MM" />
          <span>/</span>
          <input type="decimal" className={classes.Input} placeholder="YY" />
        </div>
        <div className={classes.CVVWrapper}>
          <p className={classes.InputTitle}>CVV</p>
          <input type="decimal" className={classes.Input} placeholder="CVV" />
        </div>
      </div>

      <div className={classes.Row2}>
        <p className={classes.InputTitle}>Personal Details</p>
        <div className={classes.Row2InputWrapper}>
          <input
            type="decimal"
            className={classes.Input}
            placeholder="First Name"
          />
          <input
            type="decimal"
            className={classes.Input}
            placeholder="Last Name"
          />
        </div>
      </div>

      <div className={classes.Row3}>
        <div className={classes.Row3Col1}>
          <p className={classes.InputTitle}>Save card as</p>
          <input
            type="decimal"
            className={classes.Input}
            placeholder="Personal"
          />
          <div className={classes.RechargeButton}>
            Save Card and Make Payment
          </div>
        </div>

        <div className={classes.Row3Col2}>
          <p className={classes.InputTitle}>Supported Cards</p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default NewCard;
