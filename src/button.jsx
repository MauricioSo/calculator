import React from "react";
import "./button.css";
const Button = props => {
  return (
    <button
      className={props.className}
      value={props.value}
      onClick={() => props.handleClick(props.value)}
      id={props.id}
      style={props.style}
    >
      {props.value}
    </button>
  );
};

export default Button;
