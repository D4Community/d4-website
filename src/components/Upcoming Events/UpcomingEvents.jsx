import React from "react";
import Timeline from "../Timeline/Timeline";
import './UpcomingEvents.css'
const UpcomingEvents = () => {
  return (
    <div className="UpcomingEvents" id="events">
      <div className="Heading gradient__text">
        {/* Only this heading has been changed, every where the events are identified by 'upcoming events' */}
        <h1>Events and Happenings</h1>{" "}
      </div>{" "}
      <Timeline/>
    </div>
  );
};

export default UpcomingEvents;
