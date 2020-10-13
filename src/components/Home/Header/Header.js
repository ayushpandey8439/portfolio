import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <img className="header_image" src={props.data.avatar} alt="avatar"></img>
      <div className="header_text"> {props.data.name}</div>
      <div className="header_bio">{props.data.bio}</div>
    </div>
  );
}

export default Header;
