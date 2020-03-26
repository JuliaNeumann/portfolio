import React from "react";

import "./Hero.scss";

function Hero(props) {
  const language = props.lang;

  return (
    <section className="hero is-small is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero__title title">
            <i className={`hero__icon fas fa-${props.icon}`}></i>
            {props.title[language]}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
