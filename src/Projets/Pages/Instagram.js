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
import postinsta from "../../img/post_insta.png";
import postinsta2 from "../../img/post_insta2.png";
import postinsta3 from "../../img/post_insta3.png";

import { Button, Typography } from "@material-ui/core";

// components
import Collapsible from "react-collapsible";

export default function Projets() {
  const [newProjet, setNewProjet] = useState("Youtube");
  const [projet, setProjet] = useState([]);

  /* UPDATE */
  const updateProjet = async (id, instagram) => {
    const projetDoc = doc(db, "projet", id);
    const newFields = { instagram: newProjet };
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
        Instagram
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
                trigger="Modifier la présentation d'instagram"
                triggerClassName="collapse"
                triggerOpenedClassName="collapse"
              >
                <div className="change-pres">
                  <div>
                    <textarea
                      placeholder="Modification du texte sur instagram"
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
                        updateProjet(proj.id, proj.instagram);
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
            <div className="article-row">
              <div className="article-two">
                {proj.instagram}
                <div className="margin">
                  <a
                    href="https://www.instagram.com/p/Cb7ve6JKU-k/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={postinsta}
                      className="petit-logo"
                      alt="post-insta"
                    ></img>
                  </a>
                  <p>Clique pour voir mon dernier post insta !</p>
                </div>
              </div>
              <div className="article-two">
                <a
                  href="https://www.instagram.com/p/CbiAv6LKxYf/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={postinsta2}
                    className="petit-logo"
                    alt="post-insta2"
                  ></img>
                </a>
                <a
                  href="https://www.instagram.com/p/CbKScigqo_4/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={postinsta3}
                    className="petit-logo"
                    alt="post-insta3"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
