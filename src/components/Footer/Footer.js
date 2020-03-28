import React from "react";

import "./Footer.scss";

const data = require("./Footer.json");

function Footer(props) {
  const language = props.lang;

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <ul className="footer__links">
          {data.contactLinks.map(link => {
            return (
              <li className="footer__link-item">
                <a
                  className="footer__link"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text[language]}
                </a>
              </li>
            );
          })}
        </ul>
        <div class="footer__copyright">{data.copyright[language]}</div>
      </div>
    </footer>
  );
}

export default Footer;
