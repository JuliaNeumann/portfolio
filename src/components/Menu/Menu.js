import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const data = require("./Menu.json");

function Menu() {
  return (
    <nav className="menu navbar" role="navigation" aria-label="main navigation">
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
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {data.items.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  className="navbar-item"
                  to={item.route}
                  activeClassName="is-active"
                >
                  {item.text.EN}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
