import React from "react";
import classes from './MenuSection.module.css';
import MenuItem from './MenuItem/MenuItem';

const MenuSection = () => (
  <div class={classes.MenuSection}>
    <p class={classes.Title}>Biryanis</p>
    <div class="restaurant__menu__section--items">
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
     <MenuItem/>
    </div>
  </div>
);

export default MenuSection;
