import React from "react";
import "./Sider.css";
import logo from "../img/logo.jpeg";

function Sider() {
  return (
    <div className="Sider">
      <div>
        <img src={logo} className="Big-Logo" alt="logo" />
      </div>
      <div className="Sider-Presentation">
        <h1>Qui suis-je ?</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div>
        <h1>Agenda</h1>
      </div>
    </div>
  );
}

export default Sider;
