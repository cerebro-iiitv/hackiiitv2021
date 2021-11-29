import React from "react";
import "./Sponsors.css";
import {
  titlesponsors,
  goldsponsors,
  silversponsors,
} from "./util/SponsorsData";

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsors-super-title">Amazing</div>
      <div className="sponsors-title">Sponsors</div>
      <div className="sponsors-category">Title Sponsors</div>
      <div className="sponsors-images-wrapper">
        {titlesponsors.map((sponsor, index) => (
          <div className="sponsors-image-container" key={index}>
            <img
              className="sponsors-image"
              src={sponsor.url}
              alt={sponsor.name}
            />
          </div>
        ))}
      </div>
      <div className="sponsors-category">Gold Sponsors</div>
      <div className="sponsors-images-wrapper">
        {goldsponsors.map((sponsor, index) => (
          <div className="sponsors-image-container" key={index}>
            <img
              className="sponsors-image"
              src={sponsor.url}
              alt={sponsor.name}
            />
          </div>
        ))}
      </div>
      <div className="sponsors-category">Silver Sponsors</div>
      <div className="sponsors-images-wrapper">
        {silversponsors.map((sponsor, index) => (
          <div className="sponsors-image-container" key={index}>
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
