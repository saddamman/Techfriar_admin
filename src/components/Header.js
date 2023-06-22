import React from "react";

const Header = (props) => {
  const classes = `header ${props.className}`;

  return <header className={classes}>{props.children}</header>;
};

export default Header;
