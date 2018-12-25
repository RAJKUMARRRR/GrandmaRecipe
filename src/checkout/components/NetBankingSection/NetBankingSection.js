import React from "react";
import classes from "./NetBankingSection.module.css";

import BankList from './BankList/BankList';

class NetBankingSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BankList />
        <div>
        <select className={classes.BankListDropDown} >
              <option className={classes.BankListDropDownOption}></option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
              <option className={classes.BankListDropDownOption}>HDFC Bank</option>
              <option className={classes.BankListDropDownOption}>ICICI Bank</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default NetBankingSection;
