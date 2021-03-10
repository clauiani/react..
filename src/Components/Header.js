import React from "react";
import { useState, useEffect } from "react";
import {
  AppBar,
  Collapse,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Open Sans",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  toolbarwrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#5AFF3D",
  },
  title: {
    color: "white",
    fontSize: "3rem",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#5Aff3d",
    fontSize: "5rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbarwrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2500 } : {})}
        collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorText}> Island </span>
          </h1>

          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
