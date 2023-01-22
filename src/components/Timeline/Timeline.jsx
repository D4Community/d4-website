import React from "react";
import "./Timeline.css";
import { EventData } from "../../data/EventData";
const Timeline = () => {
  return (
    <div className="Timeline">
      <div className="timeline-section">
        <div className="timeline-items">
          {EventData.map((Event) => (
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">{Event.EventDate}</div>
              <div className="timeline-content">
                  <h3>{Event.Eventname}</h3>
                <p>{Event.AboutEvent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
