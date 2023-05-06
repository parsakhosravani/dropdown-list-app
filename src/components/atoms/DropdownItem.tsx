import React from "react";

interface DropdownItemProps {
  id: number;
  label: string;
  onSelect: (itemId: number) => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ id, label, onSelect }) => {
  return (
    <li onClick={() => onSelect(id)}>
      {label}
    </li>
  );
};

export default DropdownItem;
