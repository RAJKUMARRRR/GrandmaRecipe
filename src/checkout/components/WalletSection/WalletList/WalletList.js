import React from "react";
import classes from "./WalletList.module.css";

import Wallet from "./Wallet/Wallet";

const WalletList = () => {
  return (
    <div className={classes.WalletList}>
      <Wallet />
    </div>
  );
};

export default WalletList;
