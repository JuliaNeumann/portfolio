import React from "react";
import { LocaleContext } from "../../locale-context";

import "./Home.scss";

const data = require("./Home.json");

function Home() {
  return (
    <LocaleContext.Consumer>
      {({ locale }) => (
        <div className="home">
          <p className="home__teaser-text">{data.intro[locale]}</p>
          <div className="columns is-desktop">
            {data.main.map((section, index) => {
              return (
                <div
                  key={section.icon}
                  className="column"
                >
                  <section className="home__box box">
                    <h2 className="home__title title is-4">
                      {section.title[locale]}
                    </h2>
                    <p className="home__text">{section.body[locale]}</p>
                    <div className="home__icon-wrapper">
                      <i className={`home__icon fas fa-${section.icon}`}></i>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
          <p className="home__teaser-text">{data.outro[locale]}</p>
        </div>
      )}
    </LocaleContext.Consumer>
  );
}

export default Home;
