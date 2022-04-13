import React, { useState } from "react";
import "./Admin.css";

// authentification
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";


export default function Admin() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
    }
  };

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
        <button className="btn" onClick={login}>
          Se connecter
        </button>
      </div>
      <div className="form-auth-admin">
        <h4>Utilisateur connecté</h4>
        Email : {user?.email}
        <button className="btn" onClick={logout}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}

