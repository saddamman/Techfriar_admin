import React from "react";

const Button = (props) => {
  const classes = `btn ${props.className}`;
  return (
    <button className={classes} type={`button || ${props.type}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
