import React from "react";
import { LocaleContext } from "../../locale-context";

import "./FooterBar.scss";

const data = require("./FooterBar.json");

function FooterBar() {
  return (
    <LocaleContext.Consumer>
      {({locale}) => (
        <footer className="footer-bar">
          <div className="footer-bar__wrapper container">
            <ul className="footer-bar__links">
              {data.contactLinks.map(link => {
                return (
                  <li key={link.url} className="footer-bar__link-item">
                    <a
                      className="footer-bar__link"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text[locale]}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="footer-bar__copyright">{data.copyright[locale]}</div>
          </div>
        </footer>
      )}
    </LocaleContext.Consumer>
  );
}

export default FooterBar;
