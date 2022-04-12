import React from "react";
import "./Agenda.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaPlus } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
require("moment/locale/fr.js");

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

function Agenda() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const eventCollectionRef = collection(db, "agenda");

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  const createEvent = async () => {
    await addDoc(
      eventCollectionRef,
      {
        event: newEvent,
      },
      [eventCollectionRef]
    );
  };

  return (
    <div className="Agenda">
      <h1>Agenda</h1>
      <div>
        <input
          placeholder={"Ajoutez le titre de l'evenement"}
          onChange={(event) => {
            setNewEvent(event.target.value);
          }}
        />
        <div className="div-btn">
          <button className="CRUD-btn" onClick={createEvent}>
            <FaPlus />
          </button>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
        }}
      />
    </div>
  );
}

export default Agenda;
