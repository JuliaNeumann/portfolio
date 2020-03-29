import React from "react";
import { LocaleContext } from "../../../locale-context";

import "./LanguageSelect.scss";

function LanguageSelect(props) {
  return (
    <LocaleContext.Consumer>
      {({ setLocale }) => (
        <button
          onClick={() => setLocale(props.lang)}
          className={`language-select ${
            props.current ? "language-select--current" : ""
          }`}
        >
          {props.lang}
        </button>
      )}
    </LocaleContext.Consumer>
  );
}

export default LanguageSelect;
