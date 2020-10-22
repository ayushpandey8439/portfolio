import React, { useState } from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
function Header(props) {
  const [state, setState] = useState({ displayMenu: false });
  function showMenu() {
    setState({ displayMenu: !state.displayMenu });
  }
  return (
    <div>
      <div className="header">
        {!state.displayMenu && (
          <MenuIcon onClick={showMenu} className="hamburger__menu"></MenuIcon>
        )}
        {state.displayMenu && (
          <CloseIcon onClick={showMenu} className="hamburger__menu"></CloseIcon>
        )}
      </div>
    </div>
  );
}

export default Header;
