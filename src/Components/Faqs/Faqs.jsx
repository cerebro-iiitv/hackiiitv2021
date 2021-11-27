import React from "react";
import { Link } from "react-router-dom"
import Faq from "./Faq/Faq";
import "./Faqs.css";
import { faqsdata } from "./util/Faqsdata";

const Faqs = () => {
  return (
    <div className="faqs-container">
      <div className="faqs-col faqs-left">
        <p className="faqs-title">FAQ’s</p>
        <p className="faqs-descp">
          Can't find the answer you are looking for?
          <br />
           {/* TODO: Add correct links*/}
          <Link className="faqs-red" to="#">Reach out to our Team </Link>or
          <a className="faqs-red" href="https://discord.com/" target="_blank" rel="noreferrer"> Join us on Discord</a>
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
