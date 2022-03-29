import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import "./Actualites.css";

function Actualites() {
  const [newActuTitle, setNewActuTitle] = useState("");
  const [newActuContent, setNewActuContent] = useState("");
  const [actualites, setActualites] = useState([]);
  const actualitesCollectionRef = collection(db, "actualites");

  const updateActu = async (id, content) => {
    const actuDoc = doc(db, "actualites", id);
    const newFields = { content: "" }; // ajouter le field a modifier
    await updateDoc(actuDoc, newFields);
  };

  const createActu = async () => {
    await addDoc(actualitesCollectionRef, {
      title: newActuTitle,
      content: newActuContent,
    });
  };

  // render each time the page is called
  useEffect(() => {
    const getActualites = async () => {
      const data = await getDocs(actualitesCollectionRef);
      setActualites(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getActualites();
  }, []);

  return (
    <div className="Actualites">
      <input
        placeholder={"Ajoutez le titre de l'actualité"}
        onChange={(event) => {
          setNewActuTitle(event.target.value);
        }}
      />
      <input
        placeholder={"Ajoutez le contenu de l'actualité"}
        onChange={(event) => {
          setNewActuContent(event.target.value);
        }}
      />
      <button onClick={createActu}>Ajouter l'actualité</button>
      {actualites.map((actu) => {
        return (
          <div>
            <h1>Actualités</h1>
            <h2> {actu.title}</h2>
            <p>{actu.content}</p>
            <button
              onClick={() => {
                updateActu(actu.id, actu.content);
              }}
            >
              Modifier l'actualité
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Actualites;
