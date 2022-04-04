import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import "./Actualites.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { auth } from "../firebase/firebaseConfig";
import Collapsible from "react-collapsible";

function Actualites() {
  const [newActuTitle, setNewActuTitle] = useState("Title");
  const [newActuContent, setNewActuContent] = useState("Content");
  const [actualites, setActualites] = useState([]);
  const actualitesCollectionRef = collection(db, "actualites");

  const deleteActu = async (id) => {
    const actuDoc = doc(db, "actualites", id);
    await deleteDoc(actuDoc);
  };

  const updateActuTitle = async (id, title) => {
    const actuDoc = doc(db, "actualites", id);
    const newFields = { title: newActuTitle }; // ajouter le field a modifier
    await updateDoc(actuDoc, newFields);
  };

  const updateActuContent = async (id, content) => {
    const actuDoc = doc(db, "actualites", id);
    const newFields = { content: newActuContent }; // ajouter le field a modifier
    await updateDoc(actuDoc, newFields);
  };

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
    const getActualites = async () => {
      const data = await getDocs(actualitesCollectionRef);
      setActualites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getActualites();
  }, [actualitesCollectionRef]);

  const user = auth.currentUser;

  return (
    <div className="Actualites">
      <h1>Actualités</h1>
      {user ? (
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
        return (
          <div className="actualite-content">
            <h2> {actu.title}</h2>
            <p>{actu.content}</p>
            <div>
              {user ? (
                <Collapsible
                  className="collapse"
                  trigger="Modifier l'actualité"
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

export default Actualites;
