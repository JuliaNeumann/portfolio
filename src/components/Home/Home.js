import React from "react";
import { LocaleContext } from "../../locale-context";

import "./Home.scss";

const data = require("./Home.json");

function Home() {
  return (
    <LocaleContext.Consumer>
      {({locale}) => (
        <div className="home">
          {data.main.map((section, index) => {
            const columnModifiers =
              index === data.main.length - 1
                ? "home__column--last"
                : `home__column--${index} is-offset-${index * 4}`;
            return (
              <div key={section.icon} className="home__box-wrapper columns">
                {index === 0 && (
                  <div className="home__column home__column--intro column">
                    <p className="home__teaser-text">{data.intro[locale]}</p>
                  </div>
                )}
                <div className={`home__column ${columnModifiers} column is-4`}>
                  <section className="box">
                    <h2 className="home__title title is-4">
                      {section.title[locale]}
                    </h2>
                    <p>{section.body[locale]}</p>
                    <div className="home__icon-wrapper">
                      <i className={`home__icon fas fa-${section.icon}`}></i>
                    </div>
                  </section>
                </div>
                {index === data.main.length - 1 && (
                  <div className="home__column home__column--outro column is-8">
                    <p className="home__teaser-text">{data.outro[locale]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </LocaleContext.Consumer>
  );
}

export default Home;
