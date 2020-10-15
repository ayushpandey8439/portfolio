import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="header_brand">AYUSH PANDEY</div>
        <div className="header_nav_container">
          <div className="header_nav">Home</div>
          <div className="header_nav">Projects</div>
          <div className="header_nav">Schedule</div>
          <div className="header_nav">Socials</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
