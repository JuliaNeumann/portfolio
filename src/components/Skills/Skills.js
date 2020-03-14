import React from "react";
import "./Skills.scss";
import SkillSet from "./SkillSet/SkillSet";

function Skills(props) {
  return (
    <React.Fragment>
      <div className="tile is-ancestor">
        <div className="tile is-8">
          <div className="tile is-parent is-vertical">
            <SkillSet category="frontend" lang={props.lang} />
            <SkillSet category="backend" lang={props.lang} />
          </div>
          <div className="tile is-parent">
            <SkillSet category="programming" lang={props.lang} />
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <SkillSet category="personal" lang={props.lang} />
          <SkillSet category="languages" lang={props.lang} />
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent is-7">
          <SkillSet category="job" lang={props.lang} />
        </div>
        <div className="tile is-parent">
          <SkillSet category="other" lang={props.lang} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
