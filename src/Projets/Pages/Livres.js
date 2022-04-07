import React from "react";
import "../Projets.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import book from "../../img/book1.png";
import book2 from "../../img/book2.png";
import book3 from "../../img/book3.png";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Livres</h1>
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
      <div className="book">
        <h3> Moi et la philosophie</h3>
        <div className="content-img-book">
          <p className="content-book">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          </p>
          <img src={book} className="petit-livre" alt="book1"></img>
        </div>
        <div className="right">
          <button className="btn">Lien vers la boutique</button>
        </div>
      </div>
      <div className="book">
        <h3> Moi et la philosophie 2</h3>
        <div className="content-img-book">
          <p className="content-book">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          </p>
          <img src={book2} className="petit-livre" alt="book2"></img>
        </div>
        <div className="right">
          <button className="btn">Lien vers la boutique</button>
        </div>
      </div>
      <div className="book">
        <h3> Moi et la philosophie 3</h3>
        <div className="content-img-book">
          <p className="content-book">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
            Laborum magna nulla duis ullamco cillum dolor. Voluptate
            exercitation incididunt aliquip deserunt reprehenderit elit laborum.
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          </p>
          <img src={book3} className="petit-livre" alt="book3"></img>
        </div>
        <div className="right">
          <button className="btn">Lien vers la boutique</button>
        </div>
      </div>
    </div>
  );
}

export default Projets;
