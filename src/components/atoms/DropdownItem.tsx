import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  item: {
    padding: "10px",
    cursor: "auto",
    listStyle: "none",
    "&:hover": {
      backgroundColor: "#f1f3ff",
      color: "#6680cd",
      cursor: "pointer",
      borderRadius: "10px",
    },
  },
});
interface DropdownItemProps {
  id: number;
  label: string;
  onSelect: (itemId: number) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ id, label, onSelect }) => {
  const classes = useStyles();
  return (
    <li className={classes.item} onClick={() => onSelect(id)}>
      {label}
    </li>
  );
};

export default DropdownItem;
