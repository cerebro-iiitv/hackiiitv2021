import React from "react";
import "./Hero.css";
import Timer from "./Timer/Timer";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-column">
          <img className="hero-logo" src={"./images/hackiiitv-logo.svg"} alt="hackiiitv logo" />
          <div className="hero-text-container">
            <p className="hero-date">10th - 12th December</p>
            <p className="hero-text">
              A Hackathon for the beautiful minded. 48 Hour Long organised by{" "}
              <span className="hero-iiitv">IIIT Vadodara</span>
            </p>
          </div>
          <Timer />
        </div>
        <div className="hero-column">
          <img
            src={"./images/hero.svg"}
            alt="hackiiitv hero"
            className="hero-img"
          />
        </div>
      </div>
      <img src={"./images/swiggly.svg"} alt="swiggly" className="swiggly-img" />
    </>
  );
};

export default Hero;
