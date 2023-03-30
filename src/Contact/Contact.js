import React, { useState, useEffect } from "react";
import "./Contact.css";

// firestore
import { collection, updateDoc, doc, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

import { Button, Typography } from "@material-ui/core";

// components
import Collapsible from "react-collapsible";

export default function Contact() {
  const [newContact, setNewContact] = useState("Contact");
  const [contact, setContact] = useState([]);

  /* UPDATE */
  const updateContact = async (id, contactpres) => {
    const contactDoc = doc(db, "contact", id);
    const newFields = { contactpres: newContact };
    await updateDoc(contactDoc, newFields);
  };

  //render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "contact"), (document) => {
      setContact(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  // used for the authentification
  const user = auth.currentUser;

  return (
    <div className="Contact">
      {contact.map((contact) => {
        return (
          <div>
            <Typography variant="h1" className="title">
              Contact
            </Typography>
            <div className="article">
              {contact.contactpres}
              <div className="Contact-Links">
                <a
                  href="https://www.youtube.com/channel/UCX7Q-2LU8HFJYngYhArrg0Q"
                  target="_blank"
                  className="C-Links"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/philosophavie/?hl=fr"
                  target="_blank"
                  className="C-Links"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@philosophavie"
                  target="_blank"
                  className="C-Links"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://mobile.twitter.com/philosophavie"
                  target="_blank"
                  className="C-Links"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
            <div>
              {user ? ( // is the user connected ?
                <Collapsible
                  trigger="Modifier le texte de contact"
                  triggerClassName="collapse"
                  triggerOpenedClassName="collapse"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du texte du contact"
                        onChange={(event) => {
                          setNewContact(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <Button
                        variant="outlined"
                        className="CRUD-btn"
                        onClick={() => {
                          updateContact(contact.id, contact.contactpres);
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
