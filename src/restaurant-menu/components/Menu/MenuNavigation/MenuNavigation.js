import React from "react";
import classes from './MenuNavigation.module.css';

const MenuNavigation = () => (
  <div class={classes.MenuNavigation}>
    <div class={classes.LeftArrow}>
      <i class="fas fa-arrow-alt-circle-left" />
    </div>
    <div class={classes.NavItems}>
      <a href="#" class={classes.NavItem}>
        Biryanis
      </a>
      <a href="#" class={classes.NavItem}>
        Kebabs
      </a>
    </div>
    <div class={classes.RightArrow}>
      <i class="fas fa-arrow-alt-circle-right" />
    </div>
    <div class={classes.Search}>
      <input
        type="text"
        class={classes.SearchInput}
        placeholder="Search for dishes..."
      />
      <i class={"fas fa-search "+classes.SearchIcon}/>
    </div>
  </div>
);

export default MenuNavigation;
