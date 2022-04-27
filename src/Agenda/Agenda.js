import React, { useState, useEffect } from "react";
import "./Agenda.css";
import { onSnapshot } from "@firebase/firestore";

// firestore
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "@firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";

// icônes
import { BsCalendar2Plus } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

// components
import Collapsible from "react-collapsible";

// rbc
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
//import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
require("moment/locale/fr.js");

//const localizer = momentLocalizer(moment);

function Agenda() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState([]);

  function handleAddEvent() {
    //setAllEvents([...allEvents, newEvent]);
    createEvent();
  }

  const deleteEvent = async (id) => {
    const eventDoc = doc(db, "agenda", id);
    await deleteDoc(eventDoc);
  };

  const updateEventTitle = async (id, event) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { event: newEvent.title }; // ajouter le field a modifier
    await updateDoc(eventDoc, newFields);
  };

  const updateEventDescription = async (id, description) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { description: newEvent.description }; // ajouter le field a modifier
    await updateDoc(eventDoc, newFields);
  };

  const updateEventStartDate = async (id, dateDebut) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { dateDebut: newEvent.start }; // ajouter le field a modifier
    await updateDoc(eventDoc, newFields);
  };

  const updateEventEndDate = async (id, dateFin) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { dateFin: newEvent.end }; // ajouter le field a modifier
    await updateDoc(eventDoc, newFields);
  };

  // add event on firebase
  const createEvent = async () => {
    let id = newEvent.start.getTime().toString();
    let counter = allEvents.length;
    id = id + counter;
    await setDoc(doc(db, "agenda", id), {
      event: newEvent.title,
      description: newEvent.description,
      dateDebut: newEvent.start,
      dateFin: newEvent.end,
    });
  };

  // render each time the page is called
  useEffect(() => {
    const update = onSnapshot(collection(db, "agenda"), (document) => {
      setAllEvents(document.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return update;
  }, []);

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
            <textarea
              type="text"
              placeholder="Ajouter la descritpion de l'évènement"
              style={{ marginRight: "10px" }}
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
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
              <BsCalendar2Plus />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {allEvents
        .sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
        .map((ev) => {
          let empty;
          if (ev.dateFin === "") {
            empty = true;
          } else {
            empty = false;
          }
          return (
            <div>
              <div className="agenda-day-by-day">
                {empty ? (
                  <h2 className="agenda-day-by-day">
                    {" le "}
                    {moment(ev.dateDebut.seconds * 1000).format(
                      "Do MMMM YYYY"
                    )}{" "}
                  </h2>
                ) : (
                  <h2 className="agenda-day-by-day">
                    {" du  "}{" "}
                    {moment(ev.dateDebut.seconds * 1000).format("Do MMMM YYYY")}{" "}
                    <br></br>
                    {" au "}
                    {moment(ev.dateFin.seconds * 1000).format("Do MMMM YYYY")}
                  </h2>
                )}
                <div>
                  <h3>{ev.event}</h3>
                  <p>{ev.description}</p>
                </div>
              </div>

              <div className="modify-agenda">
                {user ? (
                  <Collapsible
                    trigger="Modifier l'évènement"
                    triggerClassName="collapse-actu"
                    triggerOpenedClassName="collapse-actu"
                  >
                    <div className="change-actu">
                      <div>
                        <input
                          placeholder="Modification du titre de l'évènement"
                          onChange={(event) => {
                            setNewEvent({
                              ...newEvent,
                              title: event.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="div-btn">
                        <button
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventTitle(ev.id, ev.title);
                          }}
                        >
                          <FaPencilAlt />
                        </button>
                      </div>
                      <div>
                        <textarea
                          placeholder="Modification de la description de l'évènement"
                          onChange={(event) => {
                            setNewEvent({
                              ...newEvent,
                              description: event.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="div-btn">
                        <button
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventDescription(ev.id, ev.description);
                          }}
                        >
                          <FaPencilAlt />
                        </button>
                      </div>
                      <div>
                        <DatePicker
                          placeholderText="Date de début de l'évènement"
                          selected={newEvent.start}
                          onChange={(start) =>
                            setNewEvent({ ...newEvent, start })
                          }
                        />
                      </div>
                      <div className="div-btn">
                        <button
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventStartDate(ev.id, ev.start);
                          }}
                        >
                          <FaPencilAlt />
                        </button>
                      </div>
                      <div>
                        <DatePicker
                          placeholderText="Date de fin de l'évènement"
                          selected={newEvent.end}
                          onChange={(end) => setNewEvent({ ...newEvent, end })}
                        />
                      </div>
                      <div className="div-btn">
                        <button
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventEndDate(ev.id, ev.end);
                          }}
                        >
                          <FaPencilAlt />
                        </button>
                      </div>
                      <div className="div-btn">
                        <button
                          className="CRUD-btn"
                          onClick={() => {
                            deleteEvent(ev.id);
                          }}
                        >
                          <FaRegTrashAlt />
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
      {/* <Calendar
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
      /> */}
    </div>
  );
}

export default Agenda;
