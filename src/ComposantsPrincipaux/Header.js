import React, { useState } from "react";
import "./Header.css";

// navigation
import { Link } from "react-router-dom";

// icônes et img
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo from "../img/logo.jpeg";

// menu
import { ReactDimmer } from "react-dimmer";

export default function Header() {
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
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/philosophavie/?hl=fr"
                target="_blank"
                className="Links"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@philosophavie"
                target="_blank"
                className="Links"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://mobile.twitter.com/philosophavie"
                target="_blank"
                className="Links"
                rel="noreferrer"
              >
                <FaTwitter />
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

        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="Menu">
            <h2>
              <Link to="/presentation" className="Link" onClick={handleMenu}>
                Présentation
              </Link>
            </h2>
            <h2>
              <Link to="/projets" className="Link" onClick={handleMenu}>
                Mes projets
              </Link>
            </h2>
            <h2>
              <Link to="/actualites" className="Link" onClick={handleMenu}>
                Actualités
              </Link>
            </h2>
            <h2>
              <Link to="/boutique" className="Link" onClick={handleMenu}>
                Boutique
              </Link>
            </h2>
            <h2>
              <Link to="/contact" className="Link" onClick={handleMenu}>
                Contact
              </Link>
            </h2>
          </div>
        </div>
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
