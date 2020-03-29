import React from "react";
import Hero from "../Hero/Hero";

function MainFrame(props) {
  return (
    <main>
      <Hero {...props.hero} />
      <div className="container">{props.children}</div>
    </main>
  );
}

export default MainFrame;
