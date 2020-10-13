import React from "react";
import "./Home.scss";
import background from "./../../static/assets/background.mp4";
import Header from "./Header/Header";

function Home(props) {
  return (
    <div>
      <div>
        <video autoPlay muted loop>
          <source src={background} type="video/mp4"></source>
        </video>
        <div className="video_overlay"></div>
          </div>
      <Header data={props.data}></Header>
    </div>
  );
}

export default Home;
