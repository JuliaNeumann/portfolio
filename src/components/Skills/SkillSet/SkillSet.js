import React from "react";

import "./SkillSet.scss";

const data = require("../Skills.json");

function SkillSet(props) {
  const category = data.categories[props.category];
  const language = props.lang;

  return (
    <section className="skill-set tile is-child box">
      <h2 className="skill-set__headline title is-4">
        {category.title[language]}
      </h2>
      <ul>
        {category.items.map(item => {
          return <li key={item.EN}>{item[language]}</li>;
        })}
      </ul>
    </section>
  );
}

export default SkillSet;
