import React, { useState, useEffect } from "react";
import "./Contact.css";

// firestore
import { collection, updateDoc, getDocs, doc } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

// components
import Collapsible from "react-collapsible";

export default function Contact() {
  const [newContact, setNewContact] = useState("Contact");
  const [contact, setContact] = useState([]);
  const contactCollectionRef = collection(db, "contact");

  const updateContact = async (id, contactpres) => {
    const contactDoc = doc(db, "contact", id);
    const newFields = { contactpres: newContact }; // ajouter le field a modifier
    await updateDoc(contactDoc, newFields);
  };

  //render each time the page is called
  useEffect(() => {
    const getContact = async () => {
      const data = await getDocs(contactCollectionRef);
      setContact(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getContact();
  }, [contactCollectionRef]);

  const user = auth.currentUser;

  return (
    <div className="Contact">
      {contact.map((contact) => {
        return (
          <div>
            <h1 className="title">Contact</h1>
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
              {user ? (
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
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateContact(contact.id, contact.contactpres);
                        }}
                      >
                        <FaPencilAlt />
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
