import React from "react";
import "./Header.css";
import logo from "../img/logo.jpeg";

function Header() {
  return (
    <div className="Header">
      <div className="Header-Title">
        <h1>Philosophavie</h1>
        <p className="Header-Subtitle">Gabrielle Pozzo di Borgo</p>
        <p className="Links"> TW, YT, FB, LK</p>
      </div>
      <div>
        <img src={logo} className="Header-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
