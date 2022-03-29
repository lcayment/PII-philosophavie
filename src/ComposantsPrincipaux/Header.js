import React from "react";
import "./Header.css";
import logo from "../img/logo.jpeg";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
            <div className="Header-Links">
              <a
                href="https://www.youtube.com/channel/UCX7Q-2LU8HFJYngYhArrg0Q"
                target="_blank"
                className="Links"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/philosophavie/?hl=fr"
                target="_blank"
                className="Links"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@philosophavie"
                target="_blank"
                className="Links"
              >
                <FaTiktok />
              </a>
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
