import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { createUseStyles } from "react-jss";

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
    padding: "12px",
    borderRadius: "15px",
    textAlign: "left",
    background: "white",
    border: "2px solid #6680cd",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

interface DropdownProps {
  items: { id: number; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    label: string;
  } | null>(null);
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
    };
    setNewItemLabel("");
    items.push(newItem);
  };

  return (
    <div className={classes.dropdown}>
      <input
        type="text"
        onClick={() => setIsOpen(!isOpen)}
        placeholder={selectedItem ? selectedItem.label : "Select an item"}
        className={classes.input}
        value={newItemLabel}
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
