import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        For any further queries please reach out to us at
      </div>
      <div className="footer-email">
        <a className="footer-email-link" href="mailto:technical.committee@iiitvadodara.ac.in">
          technical.committee@iiitvadodara.ac.in
        </a>
      </div>
      <div className="footer-social">
        <a href="https://twitter.com/cerebro_iiitv/">
          <img
            className="footer-social-icon"
            alt="twitter"
            src={"./images/icons/Twitter.svg"}
          />
        </a>
        <a href="https://www.instagram.com/_._cerebro_._/">
          <img
            className="footer-social-icon"
            alt="instagram"
            src={"./images/icons/Instagram.svg"}
          />
        </a>
        <a href="https://www.facebook.com/cerebro.iiitv/">
          <img
            className="footer-social-icon"
            alt="facebook"
            src={"./images/icons/Facebook.svg"}
          />
        </a>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <div className="footer-copyright-title">HackIIITV</div>
          <div className="footer-copyright-text">© 2021 — HACKIIITV</div>
        </div>
        {/* <div className="footer-coc">
          <a
            className="footer-coc-text"
            href="https://en.wikipedia.org/wiki/Code_of_conduct"
          >
            Code Of Conduct
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
