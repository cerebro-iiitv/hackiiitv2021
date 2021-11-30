import React, { useState } from "react";
import "./Schedule.css";
import Timeline from "./Timeline/Timeline";

const Schedule = () => {
  const [day, setDay] = useState(0);

  return (
    <div className="schedule-container">
      <h2 className="schedule-super-title">2021</h2>
      <h1 className="schedule-title">Schedule</h1>
      <div className="day-btns">
        <button
          className="timeline-btn"
          onClick={() => setDay(0)}
          style={
            day !== 0
              ? { backgroundColor: "#393E82" }
              : { backgroundColor: "#FF5F5D" }
          }
        >
          Registration
        </button>
        <button
          className="timeline-btn"
          onClick={() => setDay(1)}
          style={
            day !== 1
              ? { backgroundColor: "#393E82" }
              : { backgroundColor: "#FF5F5D" }
          }
        >
          Day 1
        </button>
        <button
          className="timeline-btn"
          onClick={() => setDay(2)}
          style={
            day !== 2
              ? { backgroundColor: "#393E82" }
              : { backgroundColor: "#FF5F5D" }
          }
        >
          Day 2
        </button>
        <button
          className="timeline-btn"
          onClick={() => setDay(3)}
          style={
            day !== 3
              ? { backgroundColor: "#393E82" }
              : { backgroundColor: "#FF5F5D" }
          }
        >
          Day 3
        </button>
        <button
          className="timeline-btn"
          onClick={() => setDay(4)}
          style={
            day !== 4
              ? { backgroundColor: "#393E82" }
              : { backgroundColor: "#FF5F5D" }
          }
        >
          Results
        </button>
      </div>
      <Timeline day={day} />
    </div>
  );
};

export default Schedule;
