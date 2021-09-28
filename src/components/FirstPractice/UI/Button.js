import React from "react";
import styleButton from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styleButton.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
