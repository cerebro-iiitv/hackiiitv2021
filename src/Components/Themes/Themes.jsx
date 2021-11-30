import React from "react";
import "./Themes.css";
import { themesdata } from "./util/Themesdata";
import ThemeCard from "./ThemeCard/ThemeCard";

const Themes = () => {
  return (
    <div>
      <div className="themes-super-title">Hack the Problem</div>
      <div className="themes-title">Themes</div>
      <div className="themes-container">
        {themesdata.map((theme, index) => (
          <ThemeCard theme={theme} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Themes;
