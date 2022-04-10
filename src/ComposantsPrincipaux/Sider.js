import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import "./Sider.css";
import logo from "../img/logo.jpeg";
import Collapsible from "react-collapsible";
import { FaPencilAlt } from "react-icons/fa";
import { auth } from "../firebase/firebaseConfig";

function Sider() {
  const [sider, setSider] = useState([]);
  const [newSider, setNewSider] = useState("Sider");
  const siderCollectionRef = collection(db, "sider");

  const updateSider = async (id, qui) => {
    const siderDoc = doc(db, "sider", id);
    const newFields = { qui: newSider }; // ajouter le field a modifier
    await updateDoc(siderDoc, newFields);
  };

  // render each time the page is called
  useEffect(() => {
    const getSider = async () => {
      const data = await getDocs(siderCollectionRef);
      setSider(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getSider();
  }, [siderCollectionRef]);

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
        <h1>Agenda</h1>
      </div>
    </div>
  );
}

export default Sider;
