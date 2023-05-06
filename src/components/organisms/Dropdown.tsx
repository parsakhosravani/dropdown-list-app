import React from "react";
import DropdownMenu from "./DropdownMenu";
import { createUseStyles } from "react-jss";
import { useDropdown, DropdownItem } from "../../hooks/useDropdown";

const useStyles = createUseStyles({
  dropdown: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    minWidth: "320px",
  },
  dropdown_container: { padding: 0, marginTop: "5px" },
  input: {
    padding: "10px",
    borderRadius: "10px",
    textAlign: "left",
    justifyContent: "center",
    background: "white",
    border: "2px solid #566fc3",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "3px solid rgba(86,111,195,.3)",
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

  return (
    <div className={classes.dropdown}>
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
