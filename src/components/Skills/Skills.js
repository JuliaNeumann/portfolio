import React from "react";
import SkillSet from "./SkillSet/SkillSet";

import "./Skills.scss";

function Skills(props) {
  return (
    <React.Fragment>
      <div className="tile is-ancestor">
        <div className="tile is-8">
          <div className="tile is-parent is-vertical">
            <SkillSet category="frontend" />
            <SkillSet category="backend" />
          </div>
          <div className="tile is-parent">
            <SkillSet category="programming" />
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <SkillSet category="personal" />
          <SkillSet category="languages" />
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-7">
          <SkillSet category="job" />
        </div>
        <div className="tile is-parent">
          <SkillSet category="other" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
