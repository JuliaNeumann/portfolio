import React from "react";

import "./Home.scss";

const data = require("./Home.json");

function Home(props) {
  const language = props.lang;

  return (
    <div className="home">
      {data.main.map((section, index) => {
        const columnModifiers =
          index === data.main.length - 1
            ? "home__column--last"
            : `home__column--${index} is-offset-${index * 4}`;
        return (
          <div className="home__box-wrapper columns">
            {index === 0 && (
              <div className="home__column home__column--intro column">
                <p className="home__teaser-text">{data.intro[language]}</p>
              </div>
            )}
            <div
              className={`home__column ${columnModifiers} column is-4`}
            >
              <section className="box">
                <h2 className="home__title title is-4">
                  {section.title[language]}
                </h2>
                <p>{section.body[language]}</p>
                <div className="home__icon-wrapper">
                  <i className={`home__icon fas fa-${section.icon}`}></i>
                </div>
              </section>
            </div>
            {index === data.main.length - 1 && (
              <div className="home__column home__column--outro column is-8">
                <p className="home__teaser-text">{data.outro[language]}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
