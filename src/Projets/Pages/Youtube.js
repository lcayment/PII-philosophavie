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
      <h1 className="title">Youtube</h1>
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
        <div className="article-one">
          <div className="flashcode">
            <img src={qrcodeyt} className="logo-qrcode" alt="qrcode-yt"></img>
            <p>Flash moi pour te rendre sur la chaîne !</p>
          </div>
          <div className="video">
            <img src={imgvideo} className="imgvideotmp" alt="video-tmp"></img>
          </div>
        </div>
        <div>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
          ullamco cillum dolor. Voluptate exercitation incididunt aliquip
          deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
          irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
        </div>
      </div>
    </div>
  );
}

export default Projets;
