import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import "./Presentation.css";
import { FaPencilAlt } from "react-icons/fa";
import { auth } from "../firebase/firebaseConfig";

export default function Presentation() {
  const [newPresQuiContent, setNewPresQuiContent] = useState("Qui Content");
  const [newPresParcoursContent, setNewPresParcoursContent] =
    useState("Parcours Content");
  const [newPresVisionContent, setNewPresVisionContent] =
    useState("Vision Content");
  const [presentation, setPresentation] = useState([]);
  const presentationCollectionRef = collection(db, "presentation");

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
    const getPresentation = async () => {
      const data = await getDocs(presentationCollectionRef);
      setPresentation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPresentation();
  }, [presentationCollectionRef]);

  const user = auth.currentUser;

  return (
    <div className="Presentation">
      <div className="actualite-content">
        {presentation.map((pres) => {
          return (
            <div>
              <h1>Qui suis-je ?</h1>
              <p> {pres.qui}</p>
              {user ? (
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
              ) : (
                ""
              )}
              <h1>Mon parcours</h1> <p>{pres.parcours}</p>
              {user ? (
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
              ) : (
                ""
              )}
              <h1>Ma vision</h1> <p>{pres.vision}</p>
              {user ? (
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
