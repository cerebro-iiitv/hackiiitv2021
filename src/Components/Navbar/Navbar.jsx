import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="containerr">
      <div className="links">
        <h6>
          <Link to="/prizes" className="linktext">
            Prizes
          </Link>
        </h6>
        <h6>
          <Link to="/rules" className="linktext">
            Rules
          </Link>
        </h6>
        <h6>
          <Link to="/faq" className="linktext">
            Faq
          </Link>
        </h6>
        <h6>
          <Link to="/contactUs" className="linktext">
            Contact Us
          </Link>
        </h6>
        <h6>
          <Link to="/schedule" className="linktext">
            Schedule
          </Link>
        </h6>
      </div>

      <div className="part2">
        <div className="buttonss">
          <a className="discord fab fa-discord" href="#">
            {" "}
            <div className="distext">Join Discord</div>
          </a>

          <a className="leaderboard" href="#">
            {" "}
            <div className="ledtext">
              <img className="lederlogo" src={"./images/leder.svg"} />
              Leaderboard
            </div>
          </a>
        </div>

        <div className="icons">
          <a href="#" className="fab fa-twitter icontext"></a>
          <a href="#" className="fab fa-instagram icontext"></a>
          <a href="#" className="fab fa-youtube icontext"></a>
          <a href="#" className="fab fa-facebook icontext"></a>
        </div>
      </div>
    </div>
  );
};
export default navbar;
