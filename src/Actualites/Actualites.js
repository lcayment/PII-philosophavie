import React, { useState, useEffect } from "react";
import "./Actualites.css";

// firestore
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

// components
import Collapsible from "react-collapsible";

// --------------------------------

export default function Actualites() {
  const [newActuTitle, setNewActuTitle] = useState("Title");
  const [newActuContent, setNewActuContent] = useState("Content");
  const [actualites, setActualites] = useState([]);
  const actualitesCollectionRef = collection(db, "actualites");

  /* DELETE */
  const deleteActu = async (id) => {
    const actuDoc = doc(db, "actualites", id);
    await deleteDoc(actuDoc);
  };

  /* UPDATE */
  // update the title of the actualité
  const updateActuTitle = async (id, title) => {
    const actuDoc = doc(db, "actualites", id);
    const newFields = { title: newActuTitle };
    await updateDoc(actuDoc, newFields);
  };

  // update te content of the actualité
  const updateActuContent = async (id, content) => {
    const actuDoc = doc(db, "actualites", id);
    const newFields = { content: newActuContent };
    await updateDoc(actuDoc, newFields);
  };

  /* CREATE */
  const createActu = async () => {
    await addDoc(
      actualitesCollectionRef,
      {
        title: newActuTitle,
        content: newActuContent,
      },
      [actualitesCollectionRef]
    );
  };

  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "actualites"), (document) => {
      setActualites(
        document.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return update;
  }, []);

  // used for the authentification
  const user = auth.currentUser;

  return (
    <div className="Actualites">
      <h1>Actualités</h1>
      {user ? ( // is the user connected ?
        <div className="add-actu">
          <div>
            <input
              placeholder={"Ajoutez le titre de l'actualité"}
              onChange={(event) => {
                setNewActuTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              placeholder={"Ajoutez le contenu de l'actualité"}
              onChange={(event) => {
                setNewActuContent(event.target.value);
              }}
            />
          </div>
          <div className="div-btn">
            <button className="CRUD-btn" onClick={createActu}>
              <FaPlus />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {actualites.map((actu) => {
        // parse all actualités in the array actualites
        return (
          <div className="actualite-content">
            <h2> {actu.title} </h2>
            <p> {actu.content} </p>
            <div>
              {user ? ( // is user connected ?
                <Collapsible
                  trigger="Modifier l'actualité"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-actu">
                    <div>
                      <input
                        placeholder="Modification du titre de l'actualité"
                        onChange={(event) => {
                          setNewActuTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateActuTitle(actu.id, actu.title);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                    <div>
                      <textarea
                        placeholder="Modification du contenu de l'actualité"
                        onChange={(event) => {
                          setNewActuContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateActuContent(actu.id, actu.content);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          deleteActu(actu.id);
                        }}
                      >
                        <FaRegTrashAlt />
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
