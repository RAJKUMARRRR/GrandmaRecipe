import React from "react";
import classes from './RestaurantCard.module.css';

const RestaurantCard = props => (
  <div className={classes.RestaurantCard}>
    <div className={classes.Wrapper}>
      <img
        src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg"
        alt=""
        className={classes.Image}
      />
      <p className={classes.Title}>Santosh Dhaba Exclusive</p>
      <p className={classes.Recipes}>North India,Biryani,Chinese</p>
      <div className={classes.RatingBox}>
        <div className={classes.Rating}>
          <i className={"fas fa-star "+classes.RatingIcon} />
          <p className={classes.RatingText}>4.0</p>
        </div>
        <p className={classes.Dot}>.</p>
        <p className={classes.Time}>25 MIN</p>
        <p className={classes.Dot}>.</p>
        <p className={classes.Rate}>&#8377;300 FOR TWO</p>
      </div>
      <div className={classes.Offer}>
        <i className={"fas fa-percent "+classes.OfferIcon} />
        <p className={classes.OfferText}>Free Delivery, 15% off</p>
      </div>
      <div className={classes.Outlets}>
        <p className={classes.OutletsText}>2 Outlets</p>
        <a href="#" className={classes.OutletsQuickView}>
          QUICK VIEW
        </a>
      </div>
    </div>
  </div>
);

export default RestaurantCard;
