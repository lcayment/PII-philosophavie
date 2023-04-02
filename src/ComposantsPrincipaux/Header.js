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

import { Button, Typography, IconButton } from "@material-ui/core";
import { Menu } from "@mui/icons-material";

// menu
import { ReactDimmer } from "react-dimmer";

export default function Header() {
  const [isMenuOpen, setMenu] = useState(false);

  // if the menu is closed, it opens, if the menu is opened, it closes
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

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
          <div className="Menu-Header">
            <IconButton
              variant="outlined"
              color="primary"
              aria-label="open menu"
              component="label"
              onClick={handleMenu}
            >
              <Menu />
            </IconButton>
          </div>
          {/* <div className="Search">
            <p>search</p>
          </div> */}
        </div>

        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="Menu">
            <Typography variant="h2">
              <Link
                to="/presentation"
                className="Link Link-Menu"
                onClick={handleMenu}
              >
                Présentation
              </Link>
            </Typography>
            <Typography variant="h2">
              <Link
                to="/projets"
                className="Link Link-Menu"
                onClick={handleMenu}
              >
                Projets
              </Link>
            </Typography>
            <Typography variant="h2">
              <Link
                to="/actualites"
                className="Link Link-Menu"
                onClick={handleMenu}
              >
                Actualités
              </Link>
            </Typography>
            <Typography variant="h2">
              <Link
                to="/boutique"
                className="Link Link-Menu"
                onClick={handleMenu}
              >
                Boutique
              </Link>
            </Typography>
            <Typography variant="h2">
              <Link
                to="/contact"
                className="Link Link-Menu"
                onClick={handleMenu}
              >
                Contact
              </Link>
            </Typography>
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
