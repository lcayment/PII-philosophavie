import React from "react";
import "./Projets.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Projets</h1>
      <div className="article">
        Vous pouvez retrouver ici tous les projets que je mène en ligne.
        J’espère vous retrouver dans les commentaires !
      </div>
      <div className="logo-display">
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
    </div>
  );
}

export default Projets;
