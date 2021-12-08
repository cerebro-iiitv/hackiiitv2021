import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
    <div className="containerr">
      <div className="links">
        <div>
          <a href="#about" className="linktext">
            About
          </a>
        </div>
        <div>
          <a href="#rules" className="linktext">
            Rules
          </a>
        </div>
        <div>
          <a href="#schedule" className="linktext">
            Schedule
          </a>
        </div>
        {/* <div>
          <a href="#prizes" className="linktext">
            Prizes
          </a>
        </div> */}
        <div>
          <a href="#faqs" className="linktext">
            Faqs
          </a>
        </div>
        <div>
          <a href="#contact-us" className="linktext">
            Contact Us
          </a>
        </div>
      </div>

      <div className="part2">
        <div className="buttonss">
          <a
            className="discord"
            href="https://discord.com/invite/nCXtMzkteR"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src={"./images/icons/Discord.svg"}
              alt="discord"
              className="discord-img"
            />
            <div className="distext">Join Discord</div>
          </a>

          <a className="devfolio" href="#" target="_blank" rel="noreferrer">
            <div
              className="apply-button devfolio-button"
              data-hackathon-slug="HACKIIITV2021"
              data-button-theme="light"
            ></div>
          </a>
        </div>

        {/* <div className="icons">
          <a href="#">
            <img
              src={"./images/icons/Twitter.svg"}
              alt="twitter"
              className="twitter-img"
            />
          </a>
          <a href="#">
            <img
              src={"./images/icons/Instagram.svg"}
              alt="instagram"
              className="instagram-img"
            />
          </a>
          <a href="#">
            <img
              src={"./images/icons/Youtube.svg"}
              alt="youtube"
              className="youtube-img"
            />
          </a>
          <a href="#">
            <img
              src={"./images/icons/Facebook.svg"}
              alt="facebook"
              className="facebook-img"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Navbar;
