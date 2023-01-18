import React from "react";
import Cards from "../Cards/Cards";
import './Members.css'
const Members = () => {
  return (
    <div className="Members" id="members">
    <div className="Heading gradient__text">
      <h1>Members</h1>{" "}
    </div>
    <Cards/>
    </div>
  );
};

export default Members;
