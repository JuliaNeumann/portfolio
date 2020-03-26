import React from "react";

import "./Home.scss";

const data = require("./Home.json");

function Home(props) {
  const language = props.lang;

  return (
    <div className="home">
      {data.main.map((section, index) => {
        return (
          <div className="home__box-wrapper columns">
            {index === 0 && (
              <div className="home__column home__column--intro column">
                <p className="home__intro">{data.intro[language]}</p>
              </div>
            )}
            <div
              className={`home__column home__column--${index} column is-4 is-offset-${index *
                4}`}
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
          </div>
        );
      })}
      <ul className="home__links">
        {data.contactLinks.map(link => {
          return (
            <li>
              <a
                className="home__link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text[language]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
