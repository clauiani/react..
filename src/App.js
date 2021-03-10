import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import island from "./assests/altceva.jpg";
import Header from "./Components/Header";
import PlaceToVisit from "./Components/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `100vh`,
    backgroundImage: `url(${island})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;
