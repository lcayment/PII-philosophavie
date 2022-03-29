import React from "react";
import "../Projets.css";
import qrcodeyt from "../../img/qrcode-youtube.svg";
import imgvideo from "../../img/imgvideo.png";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import { Link } from "react-router-dom";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Tiktok</h1>
      <div className="logo-display-little">
        <Link className="logo" to="/youtube">
          <FaYoutube />
        </Link>
        <Link className="logo" to="/instagram">
          <FaInstagram />
        </Link>
        <Link className="logo" to="/livres">
          <FaBook />
        </Link>
        <Link className="logo" to="/interventions">
          <HiOutlineSpeakerphone />
        </Link>
        <Link className="logo" to="/tiktok">
          <FaTiktok />
        </Link>
      </div>
      <div className="article">
        <div className="article-one"></div>
      </div>
    </div>
  );
}

export default Projets;
