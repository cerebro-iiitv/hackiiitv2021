import React from "react";
import "./TimelineItem.css";

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-wrapper">
        <div className="timeline-item-title">{data.title}</div>
        <hr className="timeline-item-hr" />
        <div className="timeline-item-time">{data.time}</div>
        <div className="timeline-item-text">{data.text}</div>
        <span className="timeline-item-circle">
          <span className="timeline-circle-index">{data.index}</span>
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
