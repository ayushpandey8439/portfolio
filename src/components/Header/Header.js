import React from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
function Header(props) {
  return (
    <div>
      <div className="header">
        <MenuIcon></MenuIcon>
      </div>
    </div>
  );
}

export default Header;
