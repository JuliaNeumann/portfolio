import React from "react";
import { LocaleContext } from "../../../locale-context";

import "./SkillSet.scss";

const data = require("../Skills.json");

function SkillSet(props) {
  const category = data.categories[props.category];

  return (
    <LocaleContext.Consumer>
      {locale => (
        <section className="skill-set tile is-child box">
          <h2 className="skill-set__headline title is-4">
            {category.title[locale]}
          </h2>
          <ul>
            {category.items.map(item => {
              return <li key={item.EN}>{item[locale]}</li>;
            })}
          </ul>
        </section>
      )}
    </LocaleContext.Consumer>
  );
}

export default SkillSet;
