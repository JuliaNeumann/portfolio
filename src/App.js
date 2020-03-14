import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const menuData = require("./components/Menu/Menu.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lang: "EN" };
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(lang) {
    this.setState({ lang });
  }

  render() {
    const pages = {
      "/skills": <Skills lang={this.state.lang} />,
      "/projects": <Projects lang={this.state.lang} />
    };

    return (
      <Router>
        <Menu lang={this.state.lang} setLanguage={this.setLanguage} />

        <Switch>
          {menuData.items.map(item => {
            return (
              <Route path={item.route} key={item.route}>
                <Hero lang={this.state.lang} title={item.text} icon={item.icon} />
                <div className="container">{pages[item.route]}</div>
              </Route>
            );
          })}
          <Route path="/">
            <div className="container">Home</div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
