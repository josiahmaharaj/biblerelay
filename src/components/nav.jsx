import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/" className="blog-header-logo text-dark">
                Trinidad Bible Reading Relay
              </NavLink>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <NavLink to="hello" className="btn btn-sm btn-outline-danger">
                LIVE
              </NavLink>
            </div>
          </div>
        </header>
        <h5 className="quote">
          A True Worshippers Evangelistic Centre and Tzion Gate Life Centre
          Ministry collaboration
        </h5>
        <p className="quote">
          Join us as we read the Bible from Genesis to Revelation in 7 days
        </p>
      </div>
    );
  }
}

export default Nav;
