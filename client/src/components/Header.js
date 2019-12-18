import React from "react";
import "./header.css";

const Header = props => (
  <div className="scoreBoard">
    <h3 className="header">Your Score: {props.total}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Header;