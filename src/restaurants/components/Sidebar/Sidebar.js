import React from "react";
import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";

class Sidebar extends React.Component {
  render() {
    return (
      <div className={classes.Sidebar}>
        <div className={classes.Content}>
          <div className={classes.Nav}>
            <SidebarItem
              itemIconClass="fas fa-fire"
              itemTitle="Popular Brands"
              itemSubTitle="88 OPTIONS"
            />
            <SidebarItem
              itemIconClass="far fa-clock"
              itemTitle="Express Delivery"
              itemSubTitle="88 OPTIONS"
            />
            <SidebarItem
              itemIconClass="far fa-handshake"
              itemTitle="Free Delivery"
              itemSubTitle="88 OPTIONS"
            />
            <SidebarItem
              itemIconClass="far fa-hand-peace"
              itemTitle="Offers Around You"
              itemSubTitle="88 OPTIONS"
            />
          </div>
          <div className="sidebar__footer">
            <SidebarItem
              itemIconClass="far fa-arrow-alt-circle-down"
              itemTitle="SEE ALL"
              itemSubTitle="282 RESTAURANTS"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
