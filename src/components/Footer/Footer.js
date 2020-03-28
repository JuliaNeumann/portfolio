import React from "react";
import { LocaleContext } from "../../locale-context";

import "./Footer.scss";

const data = require("./Footer.json");

function Footer() {
  return (
    <LocaleContext.Consumer>
      {locale => (
        <footer className="footer">
          <div className="footer__wrapper container">
            <ul className="footer__links">
              {data.contactLinks.map(link => {
                return (
                  <li key={link.url} className="footer__link-item">
                    <a
                      className="footer__link"
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
            <div className="footer__copyright">{data.copyright[locale]}</div>
          </div>
        </footer>
      )}
    </LocaleContext.Consumer>
  );
}

export default Footer;
