import React from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem/TimelineItem";
import { scheduledata } from "../util/ScheduleData";

const Timeline = ({ day }) => {
  return (
    <div className="timeline-container">
      {scheduledata[day].map((data, index) => (
        <TimelineItem data={data} key={index} />
      ))}
    </div>
  );
};

export default Timeline;
