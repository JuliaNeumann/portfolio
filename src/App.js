import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

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
        <header>
          <Menu lang={this.state.lang} setLanguage={this.setLanguage} />
        </header>

        <Switch>
          {menuData.items.map(item => {
            return (
              <Route path={item.route} key={item.route}>
                <main>
                  <Hero
                    lang={this.state.lang}
                    title={item.text}
                    icon={item.icon}
                  />
                  <div className="container">{pages[item.route]}</div>
                </main>
              </Route>
            );
          })}
          <Route path="/">
            <main>
              <Hero
                lang={this.state.lang}
                title={menuData.home.header}
                icon={menuData.home.icon}
              />
              <div className="container">
                <Home lang={this.state.lang} />
              </div>
            </main>
          </Route>
        </Switch>
        <Footer lang={this.state.lang} />
      </Router>
    );
  }
}

export default App;
