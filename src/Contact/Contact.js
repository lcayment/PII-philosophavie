import React from "react";
import "./Contact.css";

// icônes
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="Contact">
      <h1 className="title">Contact</h1>
      <div className="article">
        N’hésitez pas à m'envoyer un email à philosophavie@gmail.com ou bien un
        message privé sur Instagram !
        <div className="Contact-Links">
          <a
            href="https://www.youtube.com/channel/UCX7Q-2LU8HFJYngYhArrg0Q"
            target="_blank"
            className="C-Links"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/philosophavie/?hl=fr"
            target="_blank"
            className="C-Links"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@philosophavie"
            target="_blank"
            className="C-Links"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://mobile.twitter.com/philosophavie"
            target="_blank"
            className="C-Links"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
