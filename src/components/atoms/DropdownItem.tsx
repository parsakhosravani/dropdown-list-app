import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    padding: "10px 20px",
    cursor: "pointer",
    listStyle: "none",
    color: "#7a7b7f",
    "&:hover": {
      backgroundColor: "#f2f4ff",
      color: "#566fc3",
      borderRadius: "10px",
    },
  },
  selected: {
    backgroundColor: "#f2f4ff",
    color: "#566fc3",
    borderRadius: "10px",
  },
});

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
