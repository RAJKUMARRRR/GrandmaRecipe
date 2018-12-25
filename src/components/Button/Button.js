import React from "react";
import classes from './Button.module.css';

const Button = props => (
  <button
    {...props}
    className={[
      classes.Button,
      props.className ? props.className : ""
    ].join(" ")}
  >
    {props.children}
  </button>
);
export default Button;
