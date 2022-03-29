import { collection, getDocs } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import "./Sider.css";
import logo from "../img/logo.jpeg";


function Sider() {
  const [sider, setSider] = useState([]);
  const siderCollectionRef = collection(db, "sider");
  // render each time the page is called
  useEffect(() => {
    const getSider = async () => {
      const data = await getDocs(siderCollectionRef);
      setSider(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getSider();
  }, []);
  return (
    <div className="Sider">
      <img src={logo} className="Big-Logo" alt="logo" />
      <div className="Sider-Presentation">
        {sider.map((side) => {
          return (
            <div>
              <h1>Qui suis-je ?</h1> <p> {side.qui}</p>
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
