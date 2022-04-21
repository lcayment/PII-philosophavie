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
import logo from "../img/logo.jpeg";

// components
import Collapsible from "react-collapsible";

function Sider() {
  const [sider, setSider] = useState([]);
  const [newSider, setNewSider] = useState("Sider");

  const updateSider = async (id, qui) => {
    const siderDoc = doc(db, "sider", id);
    const newFields = { qui: newSider }; // ajouter le field a modifier
    await updateDoc(siderDoc, newFields);
  };

  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "sider"), (document) => {
      setSider(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

  const user = auth.currentUser;

  return (
    <div className="Sider">
      <img src={logo} className="Big-Logo" alt="logo" />
      <div className="Sider-Presentation">
        {sider.map((side) => {
          return (
            <div>
              <h1>Qui suis-je ?</h1> <p> {side.qui}</p>
              {user ? (
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
                      <button
                        className="CRUD-btn"
                        onClick={() => {
                          updateSider(side.id, side.qui);
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
          );
        })}
      </div>
      <div>
        <Link to="/agenda" className="Link-sider">
          <h1>Agenda </h1>
        </Link>
      </div>
    </div>
  );
}

export default Sider;
