import React from "react";
import classes from './SidebarItem.module.css';

const SidebarItem = (props) =>(
            <a href="#brands" className={classes.NavLink}>
              <div className={classes.SidebarItem}>
                <div className={classes.SidebarItemAvatar}>
                  <i className={props.itemIconClass} />
                </div>
                <div className={classes.SidebarItemDetails}>
                  <p className={classes.SidebarItemTitle}>{props.itemTitle}</p>
                  <p className={classes.SidebarItemOptions}>{props.itemSubTitle}</p>
                </div>
              </div>
            </a>
        );

export default SidebarItem;
