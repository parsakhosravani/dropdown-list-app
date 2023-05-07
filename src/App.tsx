import Dropdown from "./components/organisms/Dropdown";
import { memo } from "react";
import { useStyles } from "./styles/styles";

const MemoizedDropdown = memo(Dropdown, (prevProps, nextProps) => {
  return prevProps.items === nextProps.items;
});

function App() {
  const classes = useStyles();
  const options = [
    { id: 1, label: "Education", icon: " 🎓" },
    { id: 2, label: "Yeeeah, science!", icon: " ⚗️" },
    { id: 3, label: "Art", icon: " 🎭" },
    { id: 4, label: "Sport", icon: " ⚽" },
    { id: 5, label: "Games", icon: " 🎮" },
    { id: 6, label: "Health", icon: " 🏥" },
  ];

  return (
    <div className={classes.container}>
      <MemoizedDropdown items={options} />
    </div>
  );
}

export default App;
