import "../App.css";
import Header from "../ComposantsPrincipaux/Header.js";
import Footer from "../ComposantsPrincipaux/Footer.js";
import Sider from "../ComposantsPrincipaux/Sider.js";
import Presentation from "../Presentation/Presentation.js";
import Projets from "../Projets/Projets.js";
import Actualites from "../Actualites/Actualites.js";
import Boutique from "../Boutique/Boutique.js";
import Contact from "../Contact/Contact.js";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="App-Main">
        <Route path="/presentation">
          <Presentation />
        </Route>
        <Route path="/projets">
          <Projets />
        </Route>
        <Route path="/actualites">
          <Actualites />
        </Route>
        <Route path="/boutique">
          <Boutique />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Sider />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
