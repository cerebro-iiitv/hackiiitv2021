import React from "react";
import "./ThemeCard.css";

const ThemeCard = ({ theme }) => {
  return (
    <div className="themecard-container">
      <div className="themecard-image-container">
        <img className="themecard-image" alt="themecard" src={theme.image}></img>
      </div>
      <div className="themecard-text">{theme.text}</div>
    </div>
  );
};

export default ThemeCard;
