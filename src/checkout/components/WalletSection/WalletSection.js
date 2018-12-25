import React from "react";
import classes from "./WalletSection.module.css";
import WalletList from "./WalletList/WalletList";
import WalletDetails from "./WalletDetails/WalletDetails";

class WalletSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <WalletList />
        <WalletDetails />
      </React.Fragment>
    );
  }
}

export default WalletSection;
