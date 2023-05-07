import React from "react";
import { useStyles } from "../../styles/styles";
import { InputProps } from "../../types/service-typs";

const Input: React.FC<InputProps> = ({
  onClick,
  placeholder,
  className,
  value,
  onChange,
  onKeyDown,
}) => {
  const classes = useStyles();

  return (
    <input
      type="text"
      onClick={onClick}
      placeholder={placeholder}
      className={`${classes.input} ${className}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
