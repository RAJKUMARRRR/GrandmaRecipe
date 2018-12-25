import React from "react";
import classes from './Input.module.css';

class Input extends React.Component {
  render() {
    return (
      <input {...this.props} className={[classes.Input,this.props.className?this.props.className:""].join(' ')}/>
    );
  }
}

export default Input;
