import React, { useState } from "react";
import "./Admin.css";

// authentification
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { Button, Typography } from "@material-ui/core";

export default function Admin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  // if the state of authentification change
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // a user is logging in
  const login = async () => {
    try {
      // eslint-disable-next-line
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {}
  };

  // a user is logging out
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="Admin-Main">
      <div className="form-auth-admin">
        <h3>Connexion</h3>
        <input
          className="input-form"
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          className="input-form"
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <Button variant="outlined" className="btn" onClick={login}>
          Se connecter
        </Button>
      </div>
      <div className="form-auth-admin">
        <h4>Utilisateur connecté</h4>
        Email : {user?.email}
        <Button variant="outlined" className="btn" onClick={logout}>
          Se déconnecter
        </Button>
      </div>
    </div>
  );
}
