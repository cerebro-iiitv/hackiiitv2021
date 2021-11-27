import React from "react";
import "./Sponsors.css";
import { sponsorsdata } from "./util/SponsorsData";

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsors-super-title">Amazing</div>
      <div className="sponsors-title">Sponsors</div>
      <div className="sponsors-images-wrapper">
        {sponsorsdata.map((sponsor) => (
          <div className="sponsors-image-container">
            <img
              className="sponsors-image"
              src={sponsor.url}
              alt={sponsor.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
