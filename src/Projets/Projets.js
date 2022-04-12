import React, { useState, useEffect } from "react";
import "./Projets.css";

// firestore
import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// navigation
import { Link } from "react-router-dom";

// icônes
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";

// components
import Collapsible from "react-collapsible";

export default function Projets() {
  const [newProjet, setNewProjet] = useState("Projets");
  const [projet, setProjet] = useState([]);
  const projetCollectionRef = collection(db, "projet");

  const updateProjet = async (id, proj) => {
    const projetDoc = doc(db, "projet", id);
    const newFields = { proj: newProjet }; // ajouter le field a modifier
    await updateDoc(projetDoc, newFields);
  };

  // render each time the page is called
  useEffect(() => {
    const getProjet = async () => {
      const data = await getDocs(projetCollectionRef);
      setProjet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProjet();
  }, [projetCollectionRef]);

  const user = auth.currentUser;

  return (
    <div className="Projets">
      {projet.map((proj) => {
        return (
          <div>
            <h1 className="title">Projets</h1>
            <div className="article">{proj.proj}</div>
            {user ? (
              <Collapsible
                trigger="Modifier la partie Qui suis-je ?"
                triggerClassName="collapse"
                triggerOpenedClassName="collapse"
              >
                <div className="change-pres">
                  <div>
                    <textarea
                      placeholder="Modification du contenu du qui suis-je"
                      onChange={(event) => {
                        setNewProjet(event.target.value);
                      }}
                    />
                  </div>
                  <div className="div-btn">
                    <button
                      className="CRUD-btn"
                      onClick={() => {
                        updateProjet(proj.id, proj.proj);
                      }}
                    >
                      <FaPencilAlt />
                    </button>
                  </div>
                </div>
              </Collapsible>
            ) : (
              ""
            )}
            <div className="logo-display">
              <Link className="logo" to="/youtube">
                <FaYoutube />
              </Link>
              <Link className="logo" to="/instagram">
                <FaInstagram />
              </Link>
              <Link className="logo" to="/livres">
                <FaBook />
              </Link>
              <Link className="logo" to="/interventions">
                <HiOutlineSpeakerphone />
              </Link>
              <Link className="logo" to="/tiktok">
                <FaTiktok />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
