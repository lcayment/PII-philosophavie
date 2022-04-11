import React, { Component } from "react";
import "./Agenda.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Agenda extends Component() {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };
  return() {
    <div className="Agenda">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
      />
    </div>;
  }
}

export default Agenda;
