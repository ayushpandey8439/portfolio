import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import axios from "axios";
function App() {
  const [state, setState] = useState({
    avatar: "",
    bio: "",
    email: "",
    name: "",
    location: "",
  });
  useEffect(() => {
    axios.get("https://api.github.com/users/ayushpandey8439").then((res) => {
      console.log(res);
      setState({
        avatar: res.data.avatar_url,
        name: res.data.name,
        bio: res.data.bio,
      });
    });
  }, []);

  return (
    <div className="App">
      <Home data={state}></Home>
    </div>
  );
}

export default App;
