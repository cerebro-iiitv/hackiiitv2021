import React from "react";
import "./Rules.css";
import Rule from "./Rule/Rule";
import { rulesdata } from "./util/Rulesdata";

const Rules = () => {
  return (
    <div id="rules">
      <div className="rules-title">Rules</div>
      <div className="rules-container">
        {rulesdata.map((rule, index) => (
          <Rule number={index + 1} text={rule.text} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Rules;
