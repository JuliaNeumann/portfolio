import React from "react";
import { NavLink } from "react-router-dom";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

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
    return (
      <nav
        className="menu navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              className="menu__home-link navbar-item"
              to="/"
              activeClassName="is-active"
              exact={true}
            >
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
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
                    className="navbar-item"
                    to={item.route}
                    activeClassName="is-active"
                    onClick={this.close}
                  >
                    {item.text[this.props.lang]}
                  </NavLink>
                );
              })}
            </div>
            <div className="menu__end navbar-end">
              <LanguageSelect
                lang={"EN"}
                current={this.props.lang === "EN"}
                setLanguage={this.props.setLanguage}
              ></LanguageSelect>
              <LanguageSelect
                lang={"DE"}
                current={this.props.lang === "DE"}
                setLanguage={this.props.setLanguage}
              ></LanguageSelect>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
