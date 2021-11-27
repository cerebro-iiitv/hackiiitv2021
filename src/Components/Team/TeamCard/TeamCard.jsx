import React from "react";
import "./TeamCard.css";

const TeamCard = ({ data }) => {
  return (
    <div className="teamcard-container">
      <div className="teamcard-image-container">
        <img className="teamcard-image" src={data.imageURL} alt="profile" />
      </div>
      <div className="teamcard-details">
        <h2 className="teamcard-name">{data.name}</h2>
        <p className="teamcard-post">{data.post}</p>
        <div className="teamcard-links-container">
          <a href={data.twitter} className="teamcard-link">
            <img
              className="teamcard-icon"
              alt="twitter"
              src={"./images/icons/Twitter-dark.svg"}
            />
          </a>
          <a href={data.linkedin} className="teamcard-link">
            <img
              className="teamcard-icon"
              alt="twitter"
              src={"./images/icons/Linkedin.svg"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
