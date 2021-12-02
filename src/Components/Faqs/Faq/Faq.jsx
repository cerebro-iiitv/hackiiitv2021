import React from "react";
import "./Faq.css";

const Faq = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <p className="faq-ques">{question}</p>
      <p className="faq-ans">{answer}</p>
    </div>
  );
};

export default Faq;
