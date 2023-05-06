import React, { useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import { createUseStyles } from "react-jss";
import { useDropdown, DropdownItem } from "../../hooks/useDropdown";

const useStyles = createUseStyles({
  dropdown: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    minWidth: "320px",
  },
  dropdown_container: { padding: 0, marginTop: "8px" },
  input: {
    fontFamily: "sans-serif",
    fontSize: "14px",
    padding: "10px 15px",
    color: "#7a7b7f",
    borderRadius: "10px",
    minWidth: "320px",
    textAlign: "left",
    justifyContent: "center",
    background: "#fff",
    border: "2px solid #8d9be8",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "3px solid rgb(208,219,254)",
    },
  },
});

interface DropdownProps {
  items: DropdownItem[];
}

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
        placeholder={"Select an item"}
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
        {isOpen && <DropdownMenu items={items} onSelect={handleSelect} />}
      </ul>
    </div>
  );
};

export default Dropdown;
