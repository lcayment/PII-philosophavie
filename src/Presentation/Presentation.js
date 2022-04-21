import React, { useState, useEffect } from "react";
import "./Presentation.css";

// firestore
import {
  collection,
  updateDoc,
  doc,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes et img
import { FaPencilAlt } from "react-icons/fa";
import photo from "../img/gabrielle.jpeg";

// components
import Collapsible from "react-collapsible";

export default function Presentation() {
  const [newPresQuiContent, setNewPresQuiContent] = useState("Qui Content");
  const [newPresParcoursContent, setNewPresParcoursContent] =
    useState("Parcours Content");
  const [newPresVisionContent, setNewPresVisionContent] =
    useState("Vision Content");
  const [presentation, setPresentation] = useState([]);

  const updatePresentationQui = async (id, qui) => {
    const presentationDoc = doc(db, "presentation", id);
    const newFields = { qui: newPresQuiContent }; // ajouter le field a modifier
    await updateDoc(presentationDoc, newFields);
  };

  const updatePresentationParcours = async (id, parcours) => {
    const presentationDoc = doc(db, "presentation", id);
    const newFields = { parcours: newPresParcoursContent }; // ajouter le field a modifier
    await updateDoc(presentationDoc, newFields);
  };

  const updatePresentationVision = async (id, vision) => {
    const presentationDoc = doc(db, "presentation", id);
    const newFields = { vision: newPresVisionContent }; // ajouter le field a modifier
    await updateDoc(presentationDoc, newFields);
  };
  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "presentation"), (document) => {
      setPresentation(
        document.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return update;
  }, []);

  const user = auth.currentUser;

  return (
    <div className="Presentation">
      <div className="presentation-content">
        {presentation.map((pres) => {
          return (
            <div>
              <h1>Qui suis-je ?</h1>
              <p> {pres.qui}</p>
              <div className="photo-pres">
                <img src={photo} className="photo" alt="Gabrielle" />
              </div>
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
                          setNewPresQuiContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updatePresentationQui(pres.id, pres.qui);
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
              <h1>Mon parcours</h1> <p>{pres.parcours}</p>
              {user ? (
                <Collapsible
                  trigger="Modifier la partie Mon Parcours"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du contenu du parcours"
                        onChange={(event) => {
                          setNewPresParcoursContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updatePresentationParcours(pres.id, pres.parcours);
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
              <h1>Ma vision</h1> <p>{pres.vision}</p>
              {user ? (
                <Collapsible
                  trigger="Modifier la partie Ma vision"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du contenu de la vision"
                        onChange={(event) => {
                          setNewPresVisionContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updatePresentationVision(pres.id, pres.vision);
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
          );
        })}
      </div>
    </div>
  );
}
