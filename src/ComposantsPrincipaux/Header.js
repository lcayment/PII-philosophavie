import React, { useState } from "react";
import "./Header.css";

// navigation
import { Link } from "react-router-dom";

// icônes et img
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../assets/img/logo.jpeg";

export default function Header() {
  const styles = {
    myTextStyle: {
      textDecoration: "none",
      "&:hover": {
        color: "red !important",
      },
    },
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
          <div className="Menu">
            <h3>
              <Link to="/presentation" className="Link Link-Menu">
                Présentation
              </Link>
            </h3>
            <h3>
              <Link to="/projets" className="Link Link-Menu">
                Projets
              </Link>
            </h3>
            <h3>
              <Link to="/actualites" className="Link Link-Menu">
                Actualités
              </Link>
            </h3>
            <h3>
              <Link to="/boutique" className="Link Link-Menu">
                Boutique
              </Link>
            </h3>
            <h3>
              <Link to="/contact" className="Link Link-Menu">
                Contact
              </Link>
            </h3>
          </div>
        </div>
        {/* <div className="Search">
            <p>search</p>
          </div> */}
      </div>

      {/* <div className={`app-menu menu-open}`}>
          
        <ReactDimmer
          isOpen={isMenuOpen}
          exitDimmer={setMenu}
          zIndex={100}
          blur={1.5}
        />
      </div> */}
    </>
  );
}
