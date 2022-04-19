import React from "react";
import "../Projets.css";

// firestore
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { auth } from "../../firebase/firebaseConfig";

// navigation
import { Link } from "react-router-dom";

// icônes
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Projets() {
  const [newInterTitle, setNewInterTitle] = useState("Title");
  const [newInterContent, setNewInterContent] = useState("Content");
  const [interventions, setInterventions] = useState([]);
  const interventionsCollectionRef = collection(db, "interventions");

  const deleteIntervention = async (id) => {
    const interDoc = doc(db, "interventions", id);
    await deleteDoc(interDoc);
  };

  const updateInterTitle = async (id, title) => {
    const interDoc = doc(db, "interventions", id);
    const newFields = { title: newInterTitle }; // ajouter le field a modifier
    await updateDoc(interDoc, newFields);
  };

  const updateInterContent = async (id, content) => {
    const actuDoc = doc(db, "interventions", id);
    const newFields = { content: newInterContent }; // ajouter le field a modifier
    await updateDoc(interDoc, newFields);
  };

  const createActu = async () => {
    await addDoc(
      interventionCollectionRef,
      {
        title: newInterTitle,
        content: newInterContent,
      },
      [interventionsCollectionRef]
    );
  };

  return (
    <div className="Projets">
      <h1 className="title">Interventions</h1>
      <div className="logo-display-little">
        <Link className="logo" to="/youtube">
          <FaYoutube />
        </Link>
        <Link className="logo" to="/instagram">
          <FaInstagram />
        </Link>
        <Link className="logo" to="/livres">
          <FaBook />
        </Link>
        <Link className="logo" to="/interventions">
          <HiOutlineSpeakerphone />
        </Link>
        <Link className="logo" to="/tiktok">
          <FaTiktok />
        </Link>
      </div>
      <div className="article interventions">
        <h3> Intervention du jour</h3>
        <p>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum. Nulla Lorem mollit cupidatat irure.
        </p>
      </div>
      <div className="article interventions">
        <h3> Intervention d'hier</h3>
        <p>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum. Nulla Lorem mollit cupidatat irure.
        </p>
      </div>
      <div className="article interventions">
        <h3> Intervention de demain</h3>
        <p>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum. Nulla Lorem mollit cupidatat irure.
        </p>
      </div>
    </div>
  );
}

export default Projets;
