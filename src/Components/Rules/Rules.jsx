import React from "react";
import "./Rules.css";
import Rule from "./Rule/Rule";
import { rulesdata } from "./util/Rulesdata";

const Rules = () => {
  return (
    <>
      <div className="rules-title">Rules</div>
      <div className="rules-container">
        {rulesdata.map((rule, index) => (
          <Rule number={index + 1} text={rule.text} />
        ))}
      </div>
    </>
  );
};

export default Rules;
