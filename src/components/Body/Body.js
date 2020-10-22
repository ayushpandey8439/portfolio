import React, { useEffect, useState } from "react";
import "./Body.scss";
import axios from "axios";
import solo_dev from "./../../static/assets/solo_dev.jpeg";
import Button from "@material-ui/core/Button";

function Body() {
  const [state, setState] = useState({
    avatar: "",
    bio: "",
    email: "",
    name: "",
    location: "",
  });
  useEffect(() => {
    axios.get("https://api.github.com/users/ayushpandey8439").then((res) => {
      setState({
        avatar: res.data.avatar_url,
        name: res.data.name,
        bio: res.data.bio,
      });
    });
  }, []);

  return (
    <div className="body__container">
      <div className="text">
        <div className="hello__world">&lt;HELLO WORLD&gt;</div>
        <div className="pitch">
          My Name is Ayush Pandey.
          <br />
          I'm a Full Stack Developer
          <br />
          born in India and currently in Germany
        </div>
        <div>
          <Button
            className="contact__button"
            href="mailto:ayushpandey8439@gmail.com"
            target="_blank"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="image">
        <img
          src={solo_dev}
          alt="Developer on a chair"
          className="developer_image"
        ></img>
      </div>
    </div>
  );
}

export default Body;
