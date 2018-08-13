import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/nav";
import Card_Layout from "./components/card_layout";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <div className="container">
            <Route exact path="/" component={Card_Layout} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
