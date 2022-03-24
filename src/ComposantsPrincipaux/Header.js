import React from "react";
import "./Header.css";
import logo from "../img/logo.jpeg";
import logotw from "../img/icon-twitter.svg";
import logofb from "../img/icon-fb.svg";
import logolk from "../img/icon-linkedin.svg";
import logoyt from "../img/icon-yt.svg";

import { useState } from "react";
import { Menu } from "./Menu.js";
import { ReactDimmer } from "react-dimmer";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="Header">
        <div className="Up-Header">
          <div>
            <span className="Header-Title">
              <Link to="/home" className="Link">
                Philosophavie
              </Link>
            </span>
            <p className="Header-Subtitle">Gabrielle Pozzo di Borgo</p>
            <div className="Links">
              <img src={logotw} className="Logo" alt="logo-tw"></img>
              <img src={logofb} className="Logo" alt="logo-fb"></img>
              <img src={logolk} className="Logo" alt="logo-linkedin"></img>
              <img src={logoyt} className="Logo" alt="logo-yt"></img>
            </div>
          </div>
          <img src={logo} className="Header-logo" alt="logo" />
        </div>
        <div className="Down-Header">
          <div className="Menu-Header">
            <button className="menu-btn" onClick={handleMenu}>
              <FaBars />
            </button>
          </div>
          <div className="Search">
            <p>search</p>
          </div>
        </div>

        <Menu isMenuOpen={isMenuOpen} />

        <ReactDimmer
          isOpen={isMenuOpen}
          exitDimmer={setMenu}
          zIndex={100}
          blur={1.5}
        />
      </div>
    </>
  );
}

export default Header;
