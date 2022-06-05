import React from "react";
import ui from "./ButtonLine.module.css";

const ButtonLine = ({ children, ...props }) => {
  return (
    <button {...props} className={ui.button}>
      {children}
    </button>
  );
};

export default ButtonLine;
