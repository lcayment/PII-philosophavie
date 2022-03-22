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
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Router>
      <Header />
      <div className="App-Main">
        <div>
          <h3>Register</h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </div>
        <div>
          <h3>Login</h3>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={login}>Login</button>
        </div>
        <div>
          <h4>User logged in :</h4>
          <p> Email : {user?.email} </p>
        </div>
        <div>
          <button onClick={logout}>Sign out</button>
        </div>
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
