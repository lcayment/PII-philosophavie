import React from "react";
import "./Sider.css";
import logo from "../img/logo.jpeg";

function Sider() {
  return (
    <div className="Sider">
      <img src={logo} className="Big-Logo" alt="logo" />
      <div className="Sider-Presentation">
        <h1>Qui suis-je ?</h1>
        <p>
          Je m’appelle Gabrielle et je suis passionnée de philosophie. J’ai
          découvert cette matière lors de mon année de Terminale, durant
          laquelle j’ai été primée au concours général de philo, série L. Après
          l’obtention de mon master (toujours en philosophie) en 2021, j’ai
          lancé ma page Instagram puis ma chaîne Youtube dans le but de rendre
          cette matière accessible au plus grand nombre, ados comme adultes.
          Bienvenue chez philosophavie
        </p>
      </div>
      <div>
        <h1>Agenda</h1>
      </div>
    </div>
  );
}

export default Sider;
