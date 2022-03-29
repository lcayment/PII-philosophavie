import React from "react";
import "./Footer.css";
import "../App.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Header() {
  return (
    <div className="Footer">
      <div className="Footer-Links">
        <Link to="/admin" className="Link">
          Admin
        </Link>
      </div>
      <div className="Footer-Links">
        <Link to="/contact" className="Link">
          Contact
        </Link>
      </div>
      <div className="Footer-Links">
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
      </div>
    </div>
  );
}

export default Header;
