import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-container" id="about">
        <img className="about-img" src={"./images/about.svg"} alt="about" />
        <div className="about-column">
          <p className="about-title">About HACKIIITV</p>
          <hr className="about-line" />
          <p className="about-text">
            HACKIIITV is a free intra college hackathon, hosted by the Technical
            Committee of IIIT Vadodara. It will be conducted over a duration of{" "}
            <span className="about-red">48 hours</span>, hackers are immersed in
            tech culture and are encouraged to exercise their imagination to
            create interesting and{" "}
            <span className="about-blue">innovative hacks</span> for the given
            themes. We want this HACKIITV to be an{" "}
            <span className="about-red">inclusive environment</span> where you
            can learn new things, meet new people, and receive support!
            <br />
            <br />
            Have a look at the{" "}
            <a className="about-blue" href="#themes">
              themes
            </a>{" "}
            and start brainstorming!
          </p>
          {/* <button className="about-btn">
            <span className="about-btn-txt">Learn More</span>
          </button> */}
        </div>
      </div>
      <img src={"./images/swiggly.svg"} alt="swiggly" className="swiggly-img" />
    </>
  );
};

export default About;
