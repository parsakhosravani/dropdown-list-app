import { useState, useCallback } from "react";
import { DropdownItem, DropdownProps } from "../../types/service-typs";

export const useDropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [newItemLabel, setNewItemLabel] = useState("");

  const handleSelect = useCallback(
    (itemId: number) => {
      const selectedItem = items.find((item) => item.id === itemId);
      setSelectedItem(selectedItem || null);
    },
    [items]
  );

  const handleAddItem = useCallback(() => {
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
  }, [items, newItemLabel]);

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
