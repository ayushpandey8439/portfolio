import React from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";

import MenuPage from "../Menu/MenuPage";

function Header(props) {
  const displayMenu = props.displayMenu;
  const [anchorEl, setAnchorEl] = React.useState("");
  const handleClick = (event) => {
    props.toggleMenu(!displayMenu);
  };
  const handleClose = () => {
    props.toggleMenu(!displayMenu);
  };
  return (
    <div>
      <div className="header">
        <MenuIcon onClick={handleClick} className="hamburger__menu"></MenuIcon>
      </div>
      <MenuPage displayMenu={props.displayMenu} toggleMenu={props.toggleMenu} />
    </div>
  );
}

export default Header;
