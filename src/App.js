import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Menu from "./components/Menu/Menu";

const menuData = require("./components/Menu/Menu.json");

function App() {
  return (
    <Router>
      <Menu />

      <div className="container">
        <Switch>
          {menuData.items.map((item, index) => {
            return <Route path={item.route}>{item.text.EN}</Route>;
          })}
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
