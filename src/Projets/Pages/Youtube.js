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
import qrcodeyt from "../../img/qrcode-youtube.svg";

import { Button, Typography } from "@material-ui/core";

// components
import Collapsible from "react-collapsible";
import YouTube from "react-youtube";

export default function Projets() {
  const [newProjet, setNewProjet] = useState("Youtube");
  const [projet, setProjet] = useState([]);

  /* UPDATE */
  const updateProjet = async (id, youtube) => {
    const projetDoc = doc(db, "projet", id);
    const newFields = { youtube: newProjet };
    await updateDoc(projetDoc, newFields);
  };

  //render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "projet"), (document) => {
      setProjet(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  // settings for the video
  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 0,
    },
  };

  // used for the authentification
  const user = auth.currentUser;

  return (
    <div className="Projets">
      <Typography variant="h1" className="title">
        Youtube
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
                trigger="Modifier la présentation de youtube"
                triggerClassName="collapse"
                triggerOpenedClassName="collapse"
              >
                <div className="change-pres">
                  <div>
                    <textarea
                      placeholder="Modification du texte sur youtube"
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
                        updateProjet(proj.id, proj.youtube);
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
              <div className="article">
                <div className="article-one">
                  <div className="flashcode">
                    <img
                      src={qrcodeyt}
                      className="petit-logo"
                      alt="qrcode-yt"
                    ></img>
                    <p>Flash moi pour te rendre sur la chaîne !</p>
                  </div>
                  <div className="video">
                    <YouTube videoId="8vpXdiAI8E0" opts={videoOptions} />
                  </div>
                </div>
                <div className="article-one">{proj.youtube}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
