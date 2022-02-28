import React from "react";
import "./Header.css";
import logo from "../img/logo.jpeg";
import logotw from "../img/icon-twitter.svg";
import logofb from "../img/icon-fb.svg";
import logolinkedin from "../img/icon-linkedin.svg";
import logoyt from "../img/icon-yt.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Up-Header">
        <div className="Header-Title">
          <h1>Philosophavie</h1>
          <p className="Header-Subtitle">Gabrielle Pozzo di Borgo</p>
          <div className="Links">
            <img src={logotw} className="Logo" alt="logo-tw"></img>
            <img src={logofb} className="Logo" alt="logo-fb"></img>
            <img src={logolinkedin} className="Logo" alt="logo-linkedin"></img>
            <img src={logoyt} className="Logo" alt="logo-yt"></img>
          </div>
        </div>
        <div>
          <img src={logo} className="Header-logo" alt="logo" />
        </div>
      </div>
      <div className="Down-Header">
        <div className="Menu">
          <p>hamburger</p>
        </div>
        <div className="Search">
          <p>search</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
