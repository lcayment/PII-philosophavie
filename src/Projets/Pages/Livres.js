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

// icônes et img
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import book from "../../img/book1.png";

// components
import Collapsible from "react-collapsible";

// --------------------------------

export default function Projets() {
  const [newLivreTitle, setNewLivreTitle] = useState("Title");
  const [newLivreContent, setNewLivreContent] = useState("Content");
  const [livres, setLivres] = useState([]);
  const livresCollectionRef = collection(db, "livres");

  const deleteLivre = async (id) => {
    const livresDoc = doc(db, "livres", id);
    await deleteDoc(livresDoc);
  };

  const updateLivreTitle = async (id, title) => {
    const livresDoc = doc(db, "livres", id);
    const newFields = { title: newLivreTitle }; // ajouter le field a modifier
    await updateDoc(livresDoc, newFields);
  };

  const updateLivreContent = async (id, content) => {
    const livresDoc = doc(db, "interventions", id);
    const newFields = { content: newLivreContent }; // ajouter le field a modifier
    await updateDoc(livresDoc, newFields);
  };

  const createLivre = async () => {
    await addDoc(
      livresCollectionRef,
      {
        title: newLivreTitle,
        content: newLivreContent,
      },
      [livresCollectionRef]
    );
  };

  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "livres"), (document) => {
      setLivres(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  const user = auth.currentUser;

  return (
    <div className="Projets">
      <h1 className="title">Livres</h1>
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

      {user ? (
        <div className="add-actu">
          <div>
            <input
              placeholder={"Ajoutez le titre du livre"}
              onChange={(event) => {
                setNewLivreTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              placeholder={"Ajoutez le contenu du livre"}
              onChange={(event) => {
                setNewLivreContent(event.target.value);
              }}
            />
          </div>
          <div className="div-btn">
            <button className="CRUD-btn" onClick={createLivre}>
              <FaPlus />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {livres.map((livre) => {
        return (
          <div>
            <div className="book">
              <h3> {livre.title}</h3>
              <div className="content-img-book">
                <p className="content-book">{livre.content}</p>
                <img src={book} className="petit-livre" alt="book1"></img>
              </div>
              <div className="right">
                <button className="btn">Lien vers la boutique</button>
              </div>
              {user ? (
                <Collapsible
                  trigger="Modifier le livre"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-inter">
                    <div>
                      <input
                        placeholder="Modification du titre du livre"
                        onChange={(event) => {
                          setNewLivreTitle(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateLivreTitle(livre.id, livre.title);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                    </div>
                    <div>
                      <textarea
                        placeholder="Modification du contenu du livre"
                        onChange={(event) => {
                          setNewLivreContent(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateLivreContent(livre.id, livre.content);
                        }}
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          deleteLivre(livre.id);
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
