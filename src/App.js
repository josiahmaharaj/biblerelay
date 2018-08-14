import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./components/nav";
import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-4">
                <Card day="Day 1" />
              </div>
              <div className="col-12 col-sm-4">
                <Card day="Day 2" />
              </div>
              <div className="col-12 col-sm-4">
                <Card day="Day 3" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-sm-4">
                <Card day="Day 4" />
              </div>
              <div className="col-12 col-sm-4">
                <Card day="Day 5" />
              </div>
              <div className="col-12 col-sm-4">
                <Card day="Day 6" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-sm-4">
                <Card day="Day 7" />
              </div>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
