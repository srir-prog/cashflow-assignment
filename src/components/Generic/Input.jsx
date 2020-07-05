import React from "react";
const Input = ({ value, onChange, type, placeholder, className, name }) => {
  return (
    <input
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
