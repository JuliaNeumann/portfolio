import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import { LocaleContext } from "./locale-context";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));

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
      "/skills": <Skills />,
      "/projects": <Projects />
    };

    return (
      <Router>
        <LocaleContext.Provider value={this.state.lang}>
          <header>
            <Menu setLanguage={this.setLanguage} />
          </header>

          <Switch>
            {menuData.items.map(item => {
              return (
                <Route path={item.route} key={item.route}>
                  <main>
                    <Hero title={item.text} icon={item.icon} />

                    <div className="container">
                      <Suspense fallback={<div>Loading...</div>}>
                        {pages[item.route]}
                      </Suspense>
                    </div>
                  </main>
                </Route>
              );
            })}
            <Route path="/">
              <main>
                <Hero
                  title={menuData.home.header}
                  icon={menuData.home.icon}
                />
                <div className="container">
                  <Home />
                </div>
              </main>
            </Route>
          </Switch>
          <Footer />
        </LocaleContext.Provider>
      </Router>
    );
  }
}

export default App;
