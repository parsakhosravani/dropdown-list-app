import React, {useRef, useState, useCallback } from "react";
import DropdownMenu from "./DropdownMenu";
import Input from "../atoms/Input";
import { useStyles } from "../../styles/styles";
import { DropdownItem, DropdownProps } from "../../types/service-typs";
import { useClickOutside } from "../../hooks/useClickOutside";

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const classes = useStyles();
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

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });
  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <Input
        onClick={() => {
          setIsOpen(!isOpen);
          setSelectedItem(null);
        }}
        placeholder={"Select an item or write it down to add!"}
        className={classes.input}
        value={selectedItem ? selectedItem.label : newItemLabel}
        onChange={(event) => setNewItemLabel(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleAddItem();
            setIsOpen(true);
          }
        }}
      />
      <ul className={classes.dropdown_container}>
        {isOpen && (
          <DropdownMenu
            items={items}
            onSelect={handleSelect}
            selectedItem={selectedItem}
          />
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
