import React from "react";

import "./Home.scss";

const data = require("./Home.json");

function Home(props) {
  const language = props.lang;

  return (
    <div className="home columns">
      <div className="column">
        <p className="home__intro">{data.intro[language]}</p>
        <hr className="home__divider" />
        {data.main.map((section, index) => {
          const rightModifier = index % 2 === 0 ? "" : "home__title--right";
          return (
            <React.Fragment>
              <h2 className={`home__title title is-4 ${rightModifier}`}>
                {section.title[language]}
              </h2>
              <p>{section.body[language]}</p>
            </React.Fragment>
          );
        })}
        <hr className="home__divider" />
        <p className="home__intro">{data.outro[language]}</p>
      </div>
      <div className="column is-one-fifth">
        <div class="columns is-mobile is-multiline">
          <div className="home__image-wrapper column is-full-tablet is-half-mobile">
            <img className="home__image" src="./portrait.jpg" alt="Portrait" />
          </div>
          <div className="column">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
