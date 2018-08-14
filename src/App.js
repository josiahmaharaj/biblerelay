import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Card_Layout from "./components/card_layout";
import Player from "./components/player";
import ErrorPage from "./components/error_page";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Card_Layout} />
            <Route exact path="/watch/:id" component={Player} />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
