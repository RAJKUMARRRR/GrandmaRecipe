import React from "react";
import classes from "./CardList.module.css";

import Card from "./Card/Card";

const CardList = () => {
  return (
    <div className={classes.CardList}>
      <Card />
    </div>
  );
};

export default CardList;
