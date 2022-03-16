import "./App.css";
import Header from "./ComposantsPrincipaux/Header.js";
import Footer from "./ComposantsPrincipaux/Footer.js";
import Sider from "./ComposantsPrincipaux/Sider.js";
import Presentation from "./Presentation/Presentation.js";
import Projets from "./Projets/Projets.js";
import Actualites from "./Actualites/Actualites.js";
import Boutique from "./Boutique/Boutique.js";
import Contact from "./Contact/Contact.js";
import Youtube from "./Projets/Pages/Youtube";
import Instagram from "./Projets/Pages/Instagram";
import Livres from "./Projets/Pages/Livres";
import Interventions from "./Projets/Pages/Interventions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App-Main">
        <Switch>
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
          <Route path="/youtube">
            <Youtube />
          </Route>
          <Route path="/instagram">
            <Instagram />
          </Route>
          <Route path="/livres">
            <Livres />
          </Route>
          <Route path="/interventions">
            <Interventions />
          </Route>
        </Switch>
        <Sider />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
