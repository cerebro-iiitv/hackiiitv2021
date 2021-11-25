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
          <a className="discord" href="#">
            {" "}
            <img src={"./images/icons/Discord.svg"} alt="discord" className="discord-img" />
            <div className="distext">Join Discord</div>
          </a>

          
          <a className="leaderboard" href="#">
            {" "}
            <div className="ledtext">
              <img className="lederlogo" src={"./images/icons/leder.svg"} />
              Leaderboard
            </div>
          </a>
        </div>

        <div className="icons">
          <a href="#" ><img src={"./images/icons/Twitter.svg"} alt="twitter" className="twitter-img" /></a>
          <a href="#" ><img src={"./images/icons/Instagram.svg"} alt="instagram" className="instagram-img" /></a>
          <a href="#" ><img src={"./images/icons/Youtube.svg"} alt="youtube" className="youtube-img" /></a>
          <a href="#" ><img src={"./images/icons/Facebook.svg"} alt="facebook" className="facebook-img" /></a>
        </div>
      </div>
    </div>
  );
};
export default navbar;
