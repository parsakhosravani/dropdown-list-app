import { useState } from "react";

export interface DropdownItem {
  id: number;
  label: string;
  icon: string;
}

interface UseDropdownProps {
  items: DropdownItem[];
}

export const useDropdown = ({ items }: UseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [newItemLabel, setNewItemLabel] = useState("");

  const handleSelect = (itemId: number) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItem(selectedItem || null);
  };

  const handleAddItem = () => {
    if (newItemLabel.trim() === "") {
      return;
    }
    const newItem = {
      id: items.length + 1,
      label: newItemLabel.trim(),
      icon: "",
    };
    setNewItemLabel("");
    items.push(newItem);
  };

  return {
    isOpen,
    setIsOpen,
    selectedItem,
    setSelectedItem,
    newItemLabel,
    setNewItemLabel,
    handleSelect,
    handleAddItem,
  };
};
