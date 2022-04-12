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
import DatePicker from "react-datepicker";
import { useState } from "react";
import {
  Calendar,
  momentLocalizer,
  dateFnsLocalizer,
} from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "fr-FR": require("moment/locale/fr.js"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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
    createEvent();
  }

  const createEvent = async () => {
    await addDoc(
      eventCollectionRef,
      {
        event: newEvent.title,
        dateDebut: newEvent.start,
        dateFin: newEvent.end,
      },
      [eventCollectionRef]
    );
  };

  return (
    <div className="Agenda">
      <h1>Agenda</h1>
      <div className="add-event">
        <h2>Ajouter un nouvel évènement</h2>
        <div>
          <input
            type="text"
            placeholder="Ajouter le titre de l'évènement"
            style={{ marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
        </div>
        <div>
          <DatePicker
            placeholderText="Date de début de l'évènement"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
          />
        </div>
        <div>
          <DatePicker
            placeholderText="Date de fin de l'évènement"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
        </div>
        <div className="div-btn">
          <button className="CRUD-btn" onClick={handleAddEvent}>
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
