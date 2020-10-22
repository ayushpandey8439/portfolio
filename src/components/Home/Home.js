import React from "react";
import "./Home.scss";
import Header from "./../Header/Header";
import Body from "./../Body/Body";

function Home(props) {
  return (
    <div>
      <Header data={props.data}></Header>
      <Body data={props.data}></Body>
    </div>
  );
}

export default Home;
