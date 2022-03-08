import "./App.css";
import Header from "./component-const/Header.js";
import Footer from "./component-const/Footer.js";
import Sider from "./component-const/Sider.js";
import Presentation from "./Presentation.js";
import Projets from "./Projets.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/presentation">
          <Presentation />
        </Route>
        <Route path="/projets">
          <Projets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
