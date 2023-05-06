import React from "react";
import DropdownItem from "../atoms/DropdownItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: {
    padding: "10px",
    border: "2px solid #efefef",
    minWidth: "320px",
    borderRadius: "20px",
  },
});
interface DropdownMenuItem {
  id: number;
  label: string;
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onSelect: (itemId: number) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onSelect }) => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          id={item.id}
          label={item.label}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default DropdownMenu;
