import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="header">
      <img className="header_image" src={props.data.avatar} alt="avatar"></img>
      <div className="header_text">
        <p className="header_greeting">
          Hey, I'm <br />
          {props.data.name}
        </p>
      </div>
      <div className="header_bio">{props.data.bio}</div>
    </div>
  );
}

export default Header;
