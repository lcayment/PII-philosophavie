import { collection, getDocs } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import "./Presentation.css";

export default function Presentation() {
  const [presentation, setPresentation] = useState([]);
  const presentationCollectionRef = collection(db, "presentation");
  // render each time the page is called
  useEffect(() => {
    const getPresentation = async () => {
      const data = await getDocs(presentationCollectionRef);
      setPresentation(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPresentation();
  }, []);

  return (
    <div className="Presentation">
      {presentation.map((pres) => {
        return (
          <div>
            <h1>Qui suis-je ?</h1> <p> {pres.qui}</p>
            <h1>Mon parcours</h1> <p>{pres.parcours}</p>
            <h1>Ma vision</h1> <p>{pres.vision}</p>
          </div>
        );
      })}
    </div>
  );
}
