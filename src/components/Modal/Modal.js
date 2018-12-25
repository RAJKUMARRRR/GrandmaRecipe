import React from "react";
import classes from "./Modal.module.css";
class Modal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.Backdrop}></div>
        <div className={classes.Modal}>
        {
            this.props.children
        }
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
