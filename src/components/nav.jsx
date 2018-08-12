import React, { Component } from "react";
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
              <a className="blog-header-logo text-dark" href="/">
                Trinidad Bible Reading Relay
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="btn btn-sm btn-outline-secondary" href="/">
                Sign up
              </a>
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
