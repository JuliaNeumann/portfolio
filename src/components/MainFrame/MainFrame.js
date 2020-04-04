import React from "react";
import Hero from "../Hero/Hero";

import "./MainFrame.scss";

function MainFrame(props) {
  return (
    <main className="main-frame">
      <Hero {...props.hero} />
      <div className="main-frame__container container">{props.children}</div>
    </main>
  );
}

export default MainFrame;
