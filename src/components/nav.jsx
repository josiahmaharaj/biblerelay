import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./components.css";

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <img
                className="logo"
                src={require("../assets/relaylogo.png")}
                alt=""
              />
            </div>
            <div className="col-4 text-center">
              <Link to="/" className="blog-header-logo text-dark" href="/">
                Trinidad Bible Reading Relay
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <span className="btn btn-sm btn-outline-danger" href="/">
                LIVE
              </span>
            </div>
          </div>
        </header>
        <h5 className="quote">
          A True Worshippers Evangelistic Centre and Tzion Gate Life Centre
          Ministry collaboration
        </h5>
      </div>
    );
  }
}

export default Nav;
