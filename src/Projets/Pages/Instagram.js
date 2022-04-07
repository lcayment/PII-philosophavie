import React from "react";
import "../Projets.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import postinsta from "../../img/post_insta.png";
import postinsta2 from "../../img/post_insta2.png";
import postinsta3 from "../../img/post_insta3.png";

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

      <div className="article-row">
        <div className="article-two">
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
          <div className="margin">
            <img src={postinsta} className="petit-logo" alt="post-insta"></img>
            <p>Clique pour voir mon dernier post insta !</p>
          </div>
        </div>
        <div className="article-two">
          <img src={postinsta} className="petit-logo" alt="post-insta"></img>
          <img src={postinsta2} className="petit-logo" alt="post-insta2"></img>
          <img src={postinsta3} className="petit-logo" alt="post-insta3"></img>
        </div>
      </div>
    </div>
  );
}

export default Projets;
