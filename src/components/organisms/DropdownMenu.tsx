import React from "react";
import DropdownItem from "../atoms/DropdownItem";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  menu: {
    padding: "10px",
    border: "1px solid #efefef",
    minWidth: "320px",
    maxHeight: "320px",
    borderRadius: "15px",
    overflow: "auto",
    boxShadow: "0 0 4px rgba(0,0,0,0.08)",
    background: "#fff",
  },
});
interface DropdownMenuItem {
  id: number;
  label: string;
  icon: string;
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
          icon={item.icon}
          id={item.id}
          label={item.label}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default DropdownMenu;
