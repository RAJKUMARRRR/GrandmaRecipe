import React from "react";
import classes from './HeaderTabs.module.css';

const HeaderTabs = () => {
  return (
    <nav className={classes.HeaderTabs}>
      <ul>
        <li>
          <a href="#page1" className={classes.HeaderTabsText}>
            Breakfast
          </a>
        </li>
        <li>
          <a href="#page2" className={classes.HeaderTabsText}>
            Lunch
          </a>
        </li>
        <li>
          <a href="#page3" className={classes.HeaderTabsText}>
            Snacks
          </a>
        </li>
        <li>
          <a href="#page4" className={classes.HeaderTabsText}>
            Dinner
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTabs;
