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

import { Button, Typography } from "@material-ui/core";

// components
import Collapsible from "react-collapsible";

export default function Projets() {
  const [newProjet, setNewProjet] = useState("Youtube");
  const [projet, setProjet] = useState([]);

  /* UPDATE */
  const updateProjet = async (id, tiktok) => {
    const projetDoc = doc(db, "projet", id);
    const newFields = { tiktok: newProjet };
    await updateDoc(projetDoc, newFields);
  };

  //render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "projet"), (document) => {
      setProjet(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  // used for the authentification
  const user = auth.currentUser;

  return (
    <div className="Projets">
      <Typography variant="h1" className="title">
        Tiktok
      </Typography>
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
            {user ? ( // is the user connected ?
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
                    <Button
                      variant="outlined"
                      className="CRUD-btn"
                      onClick={() => {
                        updateProjet(proj.id, proj.tiktok);
                      }}
                    >
                      <FaPencilAlt />
                    </Button>
                  </div>
                </div>
              </Collapsible>
            ) : (
              ""
            )}
            <div>
              <div className="article-row">
                <div className="article-two">{proj.tiktok}</div>
                <div>
                  <div className="margin">
                    <a
                      href="https://www.tiktok.com/@philosophavie/video/7081633902263078150?is_from_webapp=1&sender_device=pc&web_id=7051593860266608133"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={tiktok} alt="post-tiktok"></img>
                    </a>

                    <p>Clique pour voir mon dernier post tiktok !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
