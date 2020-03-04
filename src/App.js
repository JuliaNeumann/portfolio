import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Menu from "./components/Menu/Menu";

const menuData = require("./components/Menu/Menu.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lang: "EN" };
  }

  render() {
    return (
      <Router>
        <Menu lang={this.state.lang} />

        <div className="container">
          <Switch>
            {menuData.items.map(item => {
              return (
                <Route path={item.route} key={item.route}>
                  {item.text.EN}
                </Route>
              );
            })}
            <Route path="/">Home</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
