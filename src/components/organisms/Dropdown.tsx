import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dropdown: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  },
  dropdown_container: { padding: 0, marginTop: "5px" },
  button: {
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

  const handleSelect = (itemId: number) => {
    const selectedItem = items.find((item) => item.id === itemId);
    setSelectedItem(selectedItem || null);
  };

  return (
    <div className={classes.dropdown}>
      <button className={classes.button} onClick={() => setIsOpen(!isOpen)}>
        {selectedItem ? selectedItem.label : "Select an item"}
      </button>
      <ul className={classes.dropdown_container}>
        {isOpen && <DropdownMenu items={items} onSelect={handleSelect} />}
      </ul>
    </div>
  );
};

export default Dropdown;
