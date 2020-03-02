import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
              </Link>
  
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
                <Link className="navbar-item" to="/resume">
                  Resume
                </Link>
                <Link className="navbar-item" to="/skills">
                  Skills
                </Link>
                <Link className="navbar-item" to="/projects">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/resume">Resume</Route>
            <Route path="/skills">Skills</Route>
            <Route path="/projects">Projects</Route>
            <Route path="/">Home</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
