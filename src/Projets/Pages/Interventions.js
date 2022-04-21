import React, { useState, useEffect } from "react";
import "../Projets.css";

// firestore
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { auth } from "../../firebase/firebaseConfig";

// navigation
import { Link } from "react-router-dom";

// icônes
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

// components
import Collapsible from "react-collapsible";

// --------------------------------

export default function Projets() {
  const [newInterTitle, setNewInterTitle] = useState("Title");
  const [newInterContent, setNewInterContent] = useState("Content");
  const [interventions, setInterventions] = useState([]);
  const interventionsCollectionRef = collection(db, "interventions");

  const deleteIntervention = async (id) => {
    const interDoc = doc(db, "interventions", id);
    await deleteDoc(interDoc);
  };

  const updateInterTitle = async (id, title) => {
    const interDoc = doc(db, "interventions", id);
    const newFields = { title: newInterTitle }; // ajouter le field a modifier
    await updateDoc(interDoc, newFields);
  };

  const updateInterContent = async (id, content) => {
    const interDoc = doc(db, "interventions", id);
    const newFields = { content: newInterContent }; // ajouter le field a modifier
    await updateDoc(interDoc, newFields);
  };

  const createInter = async () => {
    await addDoc(
      interventionsCollectionRef,
      {
        title: newInterTitle,
        content: newInterContent,
      },
      [interventionsCollectionRef]
    );
  };

  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "interventions"), (document) => {
      setInterventions(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  const user = auth.currentUser;

  return (
    <div className="Projets">
      <h1 className="title">Interventions</h1>
      <div className="logo-display-little">
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

      {user ? (
        <div className="add-actu">
          <div>
            <input
              placeholder={"Ajoutez le titre de l'intervention"}
              onChange={(event) => {
                setNewInterTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              placeholder={"Ajoutez le contenu de l'intervention"}
              onChange={(event) => {
                setNewInterContent(event.target.value);
              }}
            />
          </div>
          <div className="div-btn">
            <button className="CRUD-btn" onClick={createInter}>
              <FaPlus />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {interventions.map((inter) => {
        return (
          <div className="article interventions">
            <div>
              <h3> {inter.title}</h3>
              <p>{inter.content}</p>
              {user ? (
                <Collapsible
                  trigger="Modifier l'intervention"
                  triggerClassName="collapse-inter"
                  triggerOpenedClassName="collapse-inter"
                >
                  <div className="change-inter">
                    <div>
                      <input
                        placeholder="Modification du titre de l'intervention"
                        onChange={(event) => {
                          setNewInterTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateInterTitle(inter.id, inter.title);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                    <div>
                      <textarea
                        placeholder="Modification du contenu de l'intervention"
                        onChange={(event) => {
                          setNewInterContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateInterContent(inter.id, inter.content);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          deleteIntervention(inter.id);
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
