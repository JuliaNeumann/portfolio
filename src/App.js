import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import { LocaleContext, locales } from "./locale-context";
import MenuBar from "./components/MenuBar/MenuBar";
import MainFrame from "./components/MainFrame/MainFrame";
import Home from "./components/Home/Home";
import FooterBar from "./components/FooterBar/FooterBar";

const Projects = React.lazy(() => import("./components/Projects/Projects"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));

const menuData = require("./components/MenuBar/MenuBar.json");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setLocale = locale => {
      this.setState({ locale });
      document.documentElement.lang = locale.toLowerCase();
    };

    this.state = { locale: locales.EN, setLocale: this.setLocale };
  }

  render() {
    const pages = {
      "/skills": <Skills />,
      "/projects": <Projects />
    };

    return (
      <Router>
        <LocaleContext.Provider value={this.state}>
          <header>
            <MenuBar />
          </header>
          <Switch>
            {menuData.items.map(item => {
              return (
                <Route path={item.route} key={item.route}>
                  <MainFrame hero={{title: item.text, icon: item.icon}}>
                      <Suspense fallback={<div>Loading...</div>}>
                        {pages[item.route]}
                      </Suspense>
                  </MainFrame>
                </Route>
              );
            })}
            <Route path="/portfolio">
              <MainFrame hero={{title: menuData.home.header, icon: menuData.home.icon}}>
                  <Home />
              </MainFrame>
            </Route>
          </Switch>
          <FooterBar />
        </LocaleContext.Provider>
      </Router>
    );
  }
}

export default App;
