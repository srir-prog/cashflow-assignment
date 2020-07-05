import React from "react";
const Button = ({ onClick, buttonIcon, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className={buttonIcon}></i>
    </button>
  );
};

export default Button;
