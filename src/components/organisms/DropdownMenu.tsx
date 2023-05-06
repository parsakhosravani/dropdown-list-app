import React from "react";
import DropdownItem from "../atoms/DropdownItem";

interface DropdownMenuItem {
  id: number;
  label: string;
}

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onSelect: (itemId: number) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onSelect }) => {
  return (
    <div className="dropdown-menu">
      {items.map((item) => (
        <DropdownItem key={item.id} id={item.id} label={item.label} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default DropdownMenu;
