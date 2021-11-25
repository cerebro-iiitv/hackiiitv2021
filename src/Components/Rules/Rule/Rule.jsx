import React from "react";
import "./Rule.css";

const Rule = (props) => {
  return (
    <div className="rule-item">
      <div className="rule-circle">
        <span className="rule-number">{props.number}</span>
      </div>
      <p className="rule-text">{props.text}</p>
    </div>
  );
};

export default Rule;
