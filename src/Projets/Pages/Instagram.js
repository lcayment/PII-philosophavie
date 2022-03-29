import React from "react";
import "../Projets.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Instagram</h1>
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
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum
        magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt
        aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit
        cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
        Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
        laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
        ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt
        reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum
        magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt
        aliquip deserunt reprehenderit elit laborum.
      </div>
    </div>
  );
}

export default Projets;
