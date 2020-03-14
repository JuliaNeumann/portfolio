import React from "react";

import "./LanguageSelect.scss";

function LanguageSelect(props) {
  const language = props.lang;

  return (
    <button
      onClick={() => props.setLanguage(language)}
      className={`language-select ${
        props.current ? "language-select--current" : ""
      }`}
    >
      {language}
    </button>
  );
}

export default LanguageSelect;
