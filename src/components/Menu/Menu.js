import React from "react";
import { NavLink } from "react-router-dom";
import { LocaleContext, locales } from "../../locale-context";
import LanguageSelect from "./LanguageSelect/LanguageSelect";

import "./Menu.scss";

const data = require("./Menu.json");

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.close = this.close.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  close() {
    this.setState({ open: false });
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let locale = this.context.locale;

    return (
      <nav
        className="menu navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              className="menu__home-link navbar-item"
              to="/"
              activeClassName="is-active"
              title={data.home.text[locale]}
              exact={true}
            >
              <i className="fas fa-home"></i>
            </NavLink>

            <button
              className={`navbar-burger burger ${
                this.state.open ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleOpen}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div className={`navbar-menu ${this.state.open ? "is-active" : ""}`}>
            <div className="navbar-start">
              {data.items.map(item => {
                return (
                  <NavLink
                    key={item.route}
                    className="menu__item navbar-item"
                    to={item.route}
                    activeClassName="is-active"
                    onClick={this.close}
                  >
                    {item.text[locale]}
                  </NavLink>
                );
              })}
            </div>
            <div className="menu__end navbar-end">
              <LanguageSelect
                lang={locales.EN}
                current={locale === locales.EN}
              />
              <LanguageSelect
                lang={locales.DE}
                current={locale === locales.DE}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
Menu.contextType = LocaleContext;

export default Menu;
