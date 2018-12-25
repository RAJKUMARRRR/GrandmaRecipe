import React from "react";
import classes from './BackArrow.module.css';

class BackArrow extends React.Component {
  render() {
    return <i className={"fas fa-chevron-left " + classes.Back} />;
  }
}

export default BackArrow;
