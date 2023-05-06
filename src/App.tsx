import Dropdown from "./components/organisms/Dropdown";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    fontFamily: "sans-serif",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  const options = [
    { id: 1, label: "Education" },
    { id: 2, label: "Yeeeah, science!" },
    { id: 3, label: "Art" },
    { id: 4, label: "Sport" },
    { id: 5, label: "Games" },
    { id: 6, label: "Health" },
  ];

  return (
    <div className={classes.container}>
      <Dropdown items={options} />
    </div>
  );
}

export default App;
