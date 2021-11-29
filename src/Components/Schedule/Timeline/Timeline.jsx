import React from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem/TimelineItem";
import { scheduledata } from "../util/ScheduleData";

const Timeline = ({ day }) => {
  return (
    <div className="timeline-container">
      {scheduledata[day - 1].map((data) => (
        <TimelineItem data={data} key={data.time} />
      ))}
    </div>
  );
};

export default Timeline;
