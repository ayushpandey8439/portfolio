import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  const [state, setState] = useState({ displayMenu: false });
  function handleMenuToggle() {
    setState({ displayMenu: !state.displayMenu });
  }
  return (
    <div className="App">
      <Header
        displayMenu={state.displayMenu}
        toggleMenu={handleMenuToggle}
      ></Header>
      <Router>
        <Switch>
          <Route path="/contact"></Route>
          <Route path="/about"></Route>
          <Route path="/skills"></Route>
          <Route path="/projects"></Route>
          <Route path="/">
            <Body></Body>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
