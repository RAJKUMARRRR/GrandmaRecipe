import React from "react";
import classes from "./CardSection.module.css";
import CardList from "./CardList/CardList";
import NewCard from "./NewCard/NewCard";

class CardSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CardList />
        <NewCard />
      </React.Fragment>
    );
  }
}

export default CardSection;
