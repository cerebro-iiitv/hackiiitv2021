import React from "react";
import "./Hero.css";
import Timer from "./Timer/Timer";

const Hero = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="hero-column">
          <img
            className="hero-logo"
            src={"./images/hackiiitv-logo.svg"}
            alt="hackiiitv logo"
          />
          <div className="hero-text-container">
            <p className="hero-date">10th - 12th December</p>
            <p className="hero-text">
              A Hackathon for the beautiful minded. 48 Hour Long organised by{" "}
              <span className="hero-iiitv">IIIT Vadodara</span>
            </p>
          </div>
          <div className="hero-buttons">
            <a
              className="hero-discord"
              href="https://discord.com/invite/nCXtMzkteR"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={"./images/icons/Discord.svg"}
                alt="discord"
                className="hero-discord-img"
              />
              <div className="distext">Join Discord</div>
            </a>

            <a className="devfolio" href="#" target="_blank" rel="noreferrer">
              <div
                class="apply-button devfolio-button"
                data-hackathon-slug="HACKIIITV2021"
                data-button-theme="light"
              ></div>
            </a>
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
