import React, { useState, useEffect } from "react";
import "./Sider.css";

// firestore
import { collection, updateDoc, doc, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// navigation
import { Link } from "react-router-dom";

// icônes et img
import { FaPencilAlt } from "react-icons/fa";
import logo from "../assets/img/logo.jpeg";
import photo from "../assets/img/gabrielle.jpeg";

import { Button, Typography } from "@material-ui/core";

// components
import Collapsible from "react-collapsible";

function Sider() {
  const [sider, setSider] = useState([]);
  const [newSider, setNewSider] = useState("Sider");

  /* UPDATE */
  const updateSider = async (id, qui) => {
    const siderDoc = doc(db, "sider", id);
    const newFields = { qui: newSider };
    await updateDoc(siderDoc, newFields);
  };

  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "sider"), (document) => {
      setSider(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  // used for the authentification
  const user = auth.currentUser;

  return (
    <div className="Sider">
      <div className="link-agenda">
        <Link to="/agenda" className="Link-sider">
          {/* <Typography variant="h1" className="click-agenda">Agenda</Typography>
          <Typography variant="h1">
            <IoIosArrowDropright />
          </Typography>*/}
        </Link>
      </div>
      <img src={photo} className="Big-Logo" alt="logo" />
      <div className="Sider-Presentation">
        {sider.map((side) => {
          return (
            <div>
              <Typography variant="h1">Qui suis-je ?</Typography>{" "}
              <p> {side.qui}</p>
              {user ? ( // is the user connected ?
                <Collapsible
                  trigger="Modifier la partie Qui suis-je ?"
                  triggerClassName="collapse-sider"
                  triggerOpenedClassName="collapse-sider"
                >
                  <div className="change-pres">
                    <div>
                      <textarea
                        placeholder="Modification du contenu du qui suis-je"
                        onChange={(event) => {
                          setNewSider(event.target.value);
                        }}
                      />
                    </div>
                    <div className="div-btn">
                      <Button
                        variant="outlined"
                        className="CRUD-btn"
                        onClick={() => {
                          updateSider(side.id, side.qui);
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
          );
        })}
      </div>
    </div>
  );
}

export default Sider;
