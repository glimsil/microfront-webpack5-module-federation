import React from "react";
import { Link } from "react-router-dom";

const style = {
  height: 400,
  backgroundColor: "#a4a4a4",
  color: "white",
  padding: 12,
};

const OtherPage = () => (
  <div style={style}>
    <h1>Other Page</h1>
    <p>
      <em>a page being provided by Other App</em>
    </p>
    <Link to="/random">Random</Link>
  </div>
);

export default OtherPage;
