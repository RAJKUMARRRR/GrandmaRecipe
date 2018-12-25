import React from "react";
import classes from './RestaurantDetails.module.css';

const RestaurantDetails = () => (
  <div className={classes.RestaurantDetails}>
    <div className={classes.ImageBox}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg"
        alt=""
        className={classes.Image}
      />
    </div>
    <div className={classes.RestaurantDetailsMain}>
      <p className={classes.Name}>Bawarchi</p>
      <p className={classes.Address}>RTC X roads, Nallakunta & Vidyanagar</p>
      <p className={classes.Tagline}>
        Bityani,Hyderabad,Tandoori,North India,Kababs,Chinese
      </p>
      <div className={classes.Delivery}>
        <div className={classes.Rating}>
          <div className={classes.RatingTextBox}>
            <span className={classes.RatingIcon}>
              <i className="fas fa-star delivery__rating--icon" />
            </span>
            <span className={classes.RatingText}>4.2</span>
          </div>
          <p className={classes.RatingTagline}>1000+ Ratings</p>
        </div>

        <div className={classes.Rating}>
          <div className={classes.RatingTextBox}>
            <span className={classes.RatingText}>26 mins</span>
          </div>
          <p className={classes.RatingTagline}>Delivery Time</p>
        </div>

        <div className={classes.Rating}>
          <div className={classes.RatingTextBox}>
            <span className={classes.RatingText}>&#8377;300</span>
          </div>
          <p className={classes.RatingTagline}>Cost for two</p>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantDetails;
