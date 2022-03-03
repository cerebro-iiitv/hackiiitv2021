import React from "react";
import "./Team.css";
import { mentordata } from "./util/MentorData";
import TeamCard from "./TeamCard/TeamCard";

const Team = () => {
  return (
    <>
      {/* <div className="team-super-title">Our</div>
      <div className="team-title">Team</div> */}
      {/* <div className="team-container">
        {teamdata.map((data, index) => (
          <TeamCard data={data} key={index} />
        ))}
      </div> */}
      <div className="team-super-title">Cool</div>
      <div className="team-title">Judges</div>
      <div className="team-container">
        {mentordata.map((data, index) => (
          <TeamCard data={data} key={index} />
        ))}
      </div>
    </>
  );
};

export default Team;
