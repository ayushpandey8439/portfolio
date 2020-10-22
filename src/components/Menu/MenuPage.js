import React, { useEffect } from "react";
import "./MenuPage.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import $background_color from "./../../style/theme.scss";
const useStyles = makeStyles({
  list: {
    width: "100vw",
    backgroundColor: $background_color,
  },
});
function MenuPage(props) {
  const classes = useStyles();
  const displayMenu = props.displayMenu;
  const handleClose = () => {
    props.toggleMenu(!displayMenu);
  };

  return (
    <div>
      <Drawer anchor="left" open={props.displayMenu} onClose={handleClose}>
        <div className="menu__container">
          <CloseIcon onClick={handleClose} className="button"></CloseIcon>
          <Router>
            <Link className="button" to="/">
              HOME
            </Link>
            <Link className="button" to="/about">
              ABOUT ME
            </Link>
            <Link className="button" to="/skills">
              SKILLS
            </Link>
            <Link className="button" to="/projects">
              PROJECTS
            </Link>
            <Link className="button" to="/contact">
              CONTACT
            </Link>
          </Router>
        </div>
      </Drawer>
    </div>
  );
}

export default MenuPage;
