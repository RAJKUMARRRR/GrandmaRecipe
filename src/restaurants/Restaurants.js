import React from "react";
import classes from "./Restaurants.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import RestaurantsSection from './components/RestaurantsSection/RestaurantsSection';

class Restaurants extends React.Component {
  render() {
    return (
      <div className={classes.Main}>
        <Sidebar />
        <div class={classes.SectionsList}>
          <RestaurantsSection/>
          <RestaurantsSection/>
          <RestaurantsSection/>
          <RestaurantsSection/>
          <RestaurantsSection/>
          <RestaurantsSection/>
          <RestaurantsSection/>
          <RestaurantsSection/>
        </div>
      </div>
    );
  }
}

export default Restaurants;
