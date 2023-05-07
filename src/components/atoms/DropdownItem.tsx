import React from "react";
import { useStyles } from "../../styles/styles";

interface DropdownItemProps {
  id: number;
  label: string;
  icon: string;
  onSelect: (itemId: number) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  id,
  label,
  icon,
  onSelect,
}) => {
  const classes = useStyles();
  return (
    <li
      className={`${classes.item} ${false ? classes.selected : ""}`}
      onClick={() => onSelect(id)}
    >
      {label}
      {icon}
    </li>
  );
};

export default DropdownItem;
