import React, { useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import { useDropdown } from "../../components/organisms/useDropdown";
import { useStyles } from "../../styles/styles";
import { DropdownProps } from "../../types/service-typs";

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const classes = useStyles();
  const {
    isOpen,
    setIsOpen,
    selectedItem,
    setSelectedItem,
    newItemLabel,
    setNewItemLabel,
    handleSelect,
    handleAddItem,
  } = useDropdown({ items });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsOpen]);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <input
        type="text"
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
