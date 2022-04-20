import React, { useState, useEffect } from "react";
import "./Agenda.css";
import { onSnapshot } from "@firebase/firestore";

// firestore
import { collection, addDoc, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes
import { FaPlus } from "react-icons/fa";

// rbc
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
require("moment/locale/fr.js");

const localizer = momentLocalizer(moment);

// tmp
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2022, 4, 7),
    end: new Date(2022, 4, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

function Agenda() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const eventCollectionRef = collection(db, "agenda");

  function handleAddEvent() {
    //setAllEvents([...allEvents, newEvent]);
    createEvent();
    console.log(allEvents);
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

  // render each time the page is called
  useEffect(() => {
    const getAllEvents = async () => {
      const data = await getDocs(eventCollectionRef);
      setAllEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAllEvents();
  }, [eventCollectionRef]);

  const user = auth.currentUser;

  return (
    <div className="Agenda">
      <h1>Agenda</h1>

      {user ? (
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
      ) : (
        ""
      )}
      {allEvents.map((ev) => {
        return (
          <div>
            <p>EVENT : {ev.event}</p>
            <p>
              Date debut :
              {moment(ev.dateDebut.seconds * 1000).format("YYYY-MMM-DD")}
            </p>
            <p>
              Date debut :{" "}
              {moment(ev.dateFin.seconds * 1000).format("YYYY-MMM-DD")}
            </p>
          </div>
        );
      })}
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
