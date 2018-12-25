import React from "react";
import classes from "./BankList.module.css";

import Bank from "./Bank/Bank";

const BankList = () => {
  return (
    <div className={classes.WalletList}>
      <Bank />
    </div>
  );
};

export default BankList;
