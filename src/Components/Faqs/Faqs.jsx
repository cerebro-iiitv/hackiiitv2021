import React from "react";
import Faq from "./Faq/Faq";
import "./Faqs.css";
import { faqsdata } from "./util/Faqsdata";

const Faqs = () => {
  return (
    <div className="faqs-container" id="faqs">
      <div className="faqs-col faqs-left">
        <p className="faqs-title">FAQ’s</p>
        <p className="faqs-descp">
          Can't find the answer you are looking for?
          <br />
           {/* TODO: Add correct links*/}
          <a className="faqs-red" href="#contact-us">Reach out to our Team </a>or
          <a className="faqs-red" href="https://discord.gg/nCXtMzkteR" target="_blank" rel="noreferrer"> Join us on Discord</a>
        </p>
      </div>
      <div className="faqs-vl"></div>
      <div className="faqs-col">
        {faqsdata.map((faq, i) => (
          <div key={i}>
            <Faq question={faq.question} answer={faq.answer} />
            {i !== faqsdata.length - 1 && <hr className="faqs-hl" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
