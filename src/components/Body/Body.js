import React, { useEffect } from "react";
import "./Body.scss";
function Body(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="body_container">
      
    </div>
  );
}

export default Body;
