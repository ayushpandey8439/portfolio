import React, { useEffect, useState } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
