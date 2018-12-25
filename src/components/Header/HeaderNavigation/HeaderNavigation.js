import React from "react";
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = (props) => {
  return (
    <nav className={classes.HeaderNavigation}>
    <ul className={classes.HeaderNavigationList}>
      <li onClick={()=>props.onItemClick("download")}>
        <div className={classes.NavItem}>
          <i className={"fas fa-mobile-alt "+classes.NavItemIcon+" " +classes.DownloadAnimation} />
          <p className={classes.NavItemText}>Download App</p>
        </div>
      </li>
      <li onClick={()=>props.onItemClick("location")}>
        <div className={classes.NavItem}>
          <i className={"fas fa-map-marker-alt "+classes.NavItemIcon} />
          <p className={classes.NavItemText}>Hyderabad</p>
        </div>
      </li>
      <li onClick={()=>props.onItemClick("login")}>
        <div className={classes.NavItem}>
          <i className={"far fa-user "+classes.NavItemIcon} />
          <p className={classes.NavItemText}>Login</p>
        </div>
      </li>
    </ul>
    <div className={classes.Cart}>
      <i className="fas fa-cart-arrow-down cart__icon" />
    </div>
  </nav>
);
};

export default HeaderNavigation;
