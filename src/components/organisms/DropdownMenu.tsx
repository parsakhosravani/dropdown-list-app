import React from "react";
import DropdownItem from "../atoms/DropdownItem";
import { useStyles } from "../../styles/styles";
import { DropdownMenuProps } from "../../types/service-typs";

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
