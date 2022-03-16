import "./App.css";
import Home from "./Home/Home.js";
import { BrowserRouter as Router, Switch } from "react-router-dom";

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
