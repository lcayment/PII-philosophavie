import "./App.css";
import Header from "./ComposantsPrincipaux/Header.js";
import Footer from "./ComposantsPrincipaux/Footer.js";
import Sider from "./ComposantsPrincipaux/Sider.js";
import Presentation from "./Presentation/Presentation.js";
import Projets from "./Projets/Projets.js";
import Home from "./Home/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Home/>
      </Switch>
    </Router>
  );
}

export default App;
