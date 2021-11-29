import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        For any further queries please reach out to us at
      </div>
      <div className="footer-email">hackiiitv@iiitvadodara.ac.in</div>
      <div className="footer-social">
        <a href="http://twitter.com/">
          <img
            className="footer-social-icon"
            alt="twitter"
            src={"./images/icons/Twitter.svg"}
          />
        </a>
        <a href="http://instagram.com/">
          <img
            className="footer-social-icon"
            alt="instagram"
            src={"./images/icons/Instagram.svg"}
          />
        </a>
        <a href="http://youtube.com/">
          <img
            className="footer-social-icon"
            alt="youtube"
            src={"./images/icons/Youtube.svg"}
          />
        </a>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <div className="footer-copyright-title">HackIIITV</div>
          <div className="footer-copyright-text">© 2021 — HACKIIITV</div>
        </div>
        <div className="footer-coc">
          <a className="footer-coc-text" href="https://en.wikipedia.org/wiki/Code_of_conduct">
            Code Of Conduct
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
