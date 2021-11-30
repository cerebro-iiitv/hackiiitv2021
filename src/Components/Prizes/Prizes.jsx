import React from "react";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div className="mainContainer" id="prizes">
      <div className="redHeading">Exciting</div>
      <div className="mainHeading">Prizes</div>

      <div className="prizeCards">

        <div className="prize-item">
          <div className="prize-number"><div className="numberText">1st</div></div>
          <div className="prize-text"><p className="mainText"><img src={"./images/icons/tick.svg"} alt="tick" className="tickImg"/>8000/-</p></div>
        </div>

        <div className="prize-item">
          <div className="prize-number"><div className="numberText">2nd</div></div>
          <div className="prize-text"><p className="mainText"><img src={"./images/icons/tick.svg"} alt="tick" className="tickImg"/>6000/-</p></div>
        </div>

        <div className="prize-item">
          <div className="prize-number"><div className="numberText">3rd</div></div>
          <div className="prize-text"><p className="mainText"><img src={"./images/icons/tick.svg"} alt="tick" className="tickImg"/>4000/-</p></div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
