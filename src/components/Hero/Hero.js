import React from "react";
import { LocaleContext } from "../../locale-context";

import "./Hero.scss";

function Hero(props) {
  return (
    <LocaleContext.Consumer>
      {locale => (
        <section className="hero is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="hero__title title">
                <i className={`hero__icon fas fa-${props.icon}`}></i>
                {props.title[locale]}
              </h1>
            </div>
          </div>
        </section>
      )}
    </LocaleContext.Consumer>
  );
}

export default Hero;
