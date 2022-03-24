import React from "react";
import "./Projets.css";
import logoytcolor from "../img/icon-yt-color.svg";
import logoinstacolor from "../img/icon-insta-color.svg";
import logobookscolor from "../img/icon-books-color.svg";
import logointerventions from "../img/icon-intervention-color.svg";
import { Link } from "react-router-dom";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Projets</h1>
      <div className="article">
        Vous pouvez retrouver ici tous les projets que je mène en ligne.
        J’espère vous retrouver dans les commentaires !
      </div>
      <div className="logo-display">
        <Link to="/youtube">
          <img src={logoytcolor} className="logo" alt="logo-yt"></img>{" "}
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
    </div>
  );
}

export default Projets;
