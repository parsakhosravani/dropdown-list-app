import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

interface DropdownProps {
  items: { id: number, label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ id: number, label: string } | null>(null);

  const handleSelect = (itemId: number) => {
    const selectedItem = items.find(item => item.id === itemId);
    setSelectedItem(selectedItem || null);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedItem ? selectedItem.label : "Select an item"}
      </button>
      <ul>
      {isOpen && (
        <DropdownMenu items={items} onSelect={handleSelect} />
      )}
      </ul>
    </div>
  );
};

export default Dropdown;
