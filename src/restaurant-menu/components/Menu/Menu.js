import React from "react";
import classes from './Menu.module.css';
import MenuNavigation from './MenuNavigation/MenuNavigation';
import MenuSection from './MenuSection/MenuSection';

class Menu extends React.Component {
  render() {
    return (
      <div class={classes.Menu}>
        <MenuNavigation/>
        <div class={classes.MenuList}>
          <MenuSection/>
          <MenuSection/>
          <MenuSection/>
          <MenuSection/>
          <MenuSection/>
        </div>
      </div>
    );
  }
}

export default Menu;
