import React, { useState, useEffect } from "react";
import "../Projets.css";

// firestore
import { collection, updateDoc, doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { auth } from "../../firebase/firebaseConfig";

// navigation
import { Link } from "react-router-dom";

// icônes et img
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import tiktok from "../../img/tiktok.png";

// components
import Collapsible from "react-collapsible";

export default function Projets() {
  const [newProjet, setNewProjet] = useState("Youtube");
  const [projet, setProjet] = useState([]);

  const updateProjet = async (id, tiktok) => {
    const projetDoc = doc(db, "projet", id);
    const newFields = { tiktok: newProjet }; // ajouter le field a modifier
    await updateDoc(projetDoc, newFields);
  };

  //render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "projet"), (document) => {
      setProjet(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  const user = auth.currentUser;

  return (
    <div className="Projets">
      <h1 className="title">Tiktok</h1>
      <div className="logo-display-little">
        <Link className="logo" to="/youtube">
          <FaYoutube />
        </Link>
        <Link className="logo" to="/instagram">
          <FaInstagram />
        </Link>
        <Link className="logo" to="/tiktok">
          <FaTiktok />
        </Link>
        <Link className="logo" to="/livres">
          <FaBook />
        </Link>
        <Link className="logo" to="/interventions">
          <HiOutlineSpeakerphone />
        </Link>
      </div>
      {projet.map((proj) => {
        return (
          <div>
            <div className="article-row">
              <div className="article-two">{proj.tiktok}</div>
              <div>
                <div className="margin">
                  <img src={tiktok} alt="post-tiktok"></img>
                  <p>Clique pour voir mon dernier post tiktok !</p>
                </div>
              </div>
            </div>

            <div>
              {user ? (
                <Collapsible
                  trigger="Modifier la présentation de tiktok"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du texte sur tiktok"
                        onChange={(event) => {
                          setNewProjet(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateProjet(proj.id, proj.tiktok);
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
