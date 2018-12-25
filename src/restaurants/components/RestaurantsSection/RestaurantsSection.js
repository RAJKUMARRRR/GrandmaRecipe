import React from "react";
import classes from './RestaurantsSection.module.css';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const RestaurantsSection = props => (
  <div class={classes.Section} id="brands">
    <div class={classes.SectionDetails}>
      <h2 class={classes.Title}>Popular Brands</h2>
    </div>
    <div class={classes.SectionGrid} >
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
      <RestaurantCard/>
    </div>
  </div>
);

export default RestaurantsSection;
