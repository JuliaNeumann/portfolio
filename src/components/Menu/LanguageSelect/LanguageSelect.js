import React from "react";

import "./LanguageSelect.scss";

function LanguageSelect(props) {
  return (
    <button
      onClick={() => props.setLanguage(props.lang)}
      className={`language-select ${
        props.current ? "language-select--current" : ""
      }`}
    >
      {props.lang}
    </button>
  );
}

export default LanguageSelect;
