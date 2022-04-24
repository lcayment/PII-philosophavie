import "./App.css";

// navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// componentns
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
import Admin from "./Admin/Admin";
import TikTok from "./Projets/Pages/TikTok";
import Agenda from "./Agenda/Agenda";

function App() {
  return (
    <Router>
      <Header />
      <div className="App-Main">
        <Switch>
          <Route path="/home">
            <Projets />
          </Route>
          <Route exact path="/">
            <Projets />
          </Route>
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
          <Route path="/tiktok">
            <TikTok />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/agenda">
            <Agenda />
          </Route>
        </Switch>
        <Sider />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
