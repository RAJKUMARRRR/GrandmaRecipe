import React from "react";
import classes from './Header.module.css';
import Logo from "./Logo/Logo";
import HeaderTabs from "./HeaderTabs/HeaderTabs";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import {withRouter} from 'react-router-dom';

class Header extends React.Component {

  heanderNavigationOnClickHandler = (type)=>{
    switch(type){
      case "login":
        this.props.history.push("/auth");
        break;
    }
  }

  render() {
    return (
      <header className={classes.Header}>
        <Logo />
        <HeaderTabs />
        <HeaderNavigation onItemClick = {this.heanderNavigationOnClickHandler}/>
      </header>
    );
  }
}

export default withRouter(Header);
