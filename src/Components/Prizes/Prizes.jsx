import React from "react";
import "./Prizes.css";
import { prizesdata } from "./util/PrizesData";

const Prizes = () => {
  return (
    <div className="mainContainer" id="prizes">
      <div className="redHeading">Exciting</div>
      <div className="mainHeading">Prizes</div>
      <div className="prizeCardContainer">
        {prizesdata.map((prize, index) => (
          <div className="prizeCards" key={index}>
            <div className="prize-item">
              <div className="prize-number">
                <div className="numberText">{prize.title}</div>
              </div>
              {prize.prizes.map((prizeItem, itemIndex) => (
                <div className="prize-text" key={itemIndex}>
                  <p className="mainText">
                    <img
                      src={"./images/icons/tick.svg"}
                      alt="tick"
                      className="tickImg"
                    />
                    {prizeItem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
