import React from "react";
import Timeline from "../Timeline/Timeline";
import './UpcomingEvents.css'
const UpcomingEvents = () => {
  return (
    <div className="UpcomingEvents" id="events">
      <div className="Heading gradient__text">
        <h1>Upcoming-Events</h1>{" "}
      </div>{" "}
      <Timeline/>
    </div>
  );
};

export default UpcomingEvents;
