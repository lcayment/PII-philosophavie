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

import { Button } from "@material-ui/core";

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

  /* DELETE */
  const deleteEvent = async (id) => {
    const eventDoc = doc(db, "agenda", id);
    await deleteDoc(eventDoc);
  };

  /* UPDATE */
  // update an event title
  const updateEventTitle = async (id, event) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { event: newEvent.title };
    await updateDoc(eventDoc, newFields);
  };

  // update an event description
  const updateEventDescription = async (id, description) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { description: newEvent.description };
    await updateDoc(eventDoc, newFields);
  };

  // update an event start date
  const updateEventStartDate = async (id, dateDebut) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { dateDebut: newEvent.start };
    await updateDoc(eventDoc, newFields);
  };

  // update an event en date
  const updateEventEndDate = async (id, dateFin) => {
    const eventDoc = doc(db, "agenda", id);
    const newFields = { dateFin: newEvent.end };
    await updateDoc(eventDoc, newFields);
  };

  /* ADD */
  const createEvent = async () => {
    // id = timestamp. Use to order the event by date
    let id = newEvent.start.getTime().toString();

    // avoid to have same id if 2 or more events are the same day
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

  // used for the authentification
  const user = auth.currentUser;

  return (
    <div className="Agenda">
      <h1>Agenda</h1>

      {user ? ( // is the user connected ?
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
            <Button
              variant="outlined"
              className="CRUD-btn"
              onClick={handleAddEvent}
            >
              <BsCalendar2Plus />
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      {allEvents
        .sort((a, b) => parseFloat(b.id) - parseFloat(a.id)) // order the event by date
        .map((ev) => {
          // if there is no end date (event just on one day)
          let empty;
          if (ev.dateFin === "") {
            empty = true;
          } else {
            empty = false;
          }

          return (
            <div>
              <div className="agenda-day-by-day">
                {empty ? ( // event just for the day
                  <h2 className="agenda-day-by-day">
                    {" le "}
                    {moment(ev.dateDebut.seconds * 1000).format(
                      "Do MMMM YYYY"
                    )}{" "}
                  </h2>
                ) : (
                  // event during two or more days
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
                {user ? ( // is user connected ?
                  <Collapsible
                    trigger="Modifier l'évènement"
                    triggerClassName="collapse"
                    triggerOpenedClassName="collapse"
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
                        <Button
                          variant="outlined"
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventTitle(ev.id, ev.title);
                          }}
                        >
                          <FaPencilAlt />
                        </Button>
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
                        <Button
                          variant="outlined"
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventDescription(ev.id, ev.description);
                          }}
                        >
                          <FaPencilAlt />
                        </Button>
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
                        <Button
                          variant="outlined"
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventStartDate(ev.id, ev.start);
                          }}
                        >
                          <FaPencilAlt />
                        </Button>
                      </div>
                      <div>
                        <DatePicker
                          placeholderText="Date de fin de l'évènement"
                          selected={newEvent.end}
                          onChange={(end) => setNewEvent({ ...newEvent, end })}
                        />
                      </div>
                      <div className="div-btn">
                        <Button
                          variant="outlined"
                          className="CRUD-btn"
                          onClick={() => {
                            updateEventEndDate(ev.id, ev.end);
                          }}
                        >
                          <FaPencilAlt />
                        </Button>
                      </div>
                      <div className="div-btn">
                        <Button
                          variant="outlined"
                          className="CRUD-btn"
                          onClick={() => {
                            deleteEvent(ev.id);
                          }}
                        >
                          <FaRegTrashAlt />
                        </Button>
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
      {/* NOT WORKING YET
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
      /> */}
    </div>
  );
}

export default Agenda;
