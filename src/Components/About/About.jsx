import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <img src={"./images/about.svg"} alt="about" />
        <div className="about-column">
          <p className="about-title">About HACKIIITV</p>
          <hr className="about-line" />
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
            <span className="about-red">labore et</span> dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in{" "}
            <span className="about-blue">reprehenderit</span> in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br />
            <br /> Excepteur sint occaecat{" "}
            <span className="about-red">cupidatat</span> non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="about-btn">
            <span className="about-btn-txt">Learn More</span>
          </button>
        </div>
      </div>
      <img src={"./images/swiggly.svg"} alt="swiggly" className="swiggly-img" />
    </>
  );
};

export default About;
