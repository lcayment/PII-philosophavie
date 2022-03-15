import React from "react";
import "../Projets.css";
import { Link } from "react-router-dom";
import logoytcolor from "../../img/icon-yt-color.svg";
import logoinstacolor from "../../img/icon-insta-color.svg";
import logobookscolor from "../../img/icon-books-color.svg";
import logointerventions from "../../img/icon-intervention-color.svg";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Instagram</h1>
      <div className="logo-display-little">
        <Link to="/youtube">
          <img src={logoytcolor} className="logo" alt="logo-yt"></img>
        </Link>
        <Link to="/instagram">
          <img src={logoinstacolor} className="logo" alt="logo-insta"></img>
        </Link>
        <Link to="/livres">
          <img src={logobookscolor} className="logo" alt="logo-books"></img>
        </Link>
        <Link to="/interventions">
          <img
            src={logointerventions}
            className="logo"
            alt="logo-intervention"
          ></img>
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
