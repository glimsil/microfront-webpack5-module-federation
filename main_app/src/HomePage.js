import React from "react";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = () => (
  <div style={style}>
    <h1>Home Page</h1>
    <h2>Welcome to microfrontends with webpack5 and module federation.</h2>
    <p>
      <em>a page being provided by Main App</em>
    </p>
  </div>
);

export default HomePage;
