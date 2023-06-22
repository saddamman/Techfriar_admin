import React from "react";

const MainTemplate = (props) => {
  const classes = `mainTemplete ${props.className}`;

  return <main className={classes}>{props.children}</main>;
};

export default MainTemplate;
