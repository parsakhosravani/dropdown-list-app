import Dropdown from "./components/organisms/Dropdown";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  const options = [
    { id: 1, label: "Education", icon: "🎓" },
    { id: 2, label: "Yeeeah, science!", icon: "⚗️" },
    { id: 3, label: "Art", icon: "🎭" },
    { id: 4, label: "Sport", icon: "⚽" },
    { id: 5, label: "Games", icon: "🎮" },
    { id: 6, label: "Health", icon: "🏥" },
  ];

  return (
    <div className={classes.container}>
      <Dropdown items={options} />
    </div>
  );
}

export default App;
