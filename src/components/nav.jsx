import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
            <div className="col-4 d-flex justify-content-around align-items-center">
              <nav className="navbar navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span>
                    <FontAwesomeIcon icon={faCaretDown} />
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink exact to="/" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/contact" className="nav-link">
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/admin" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
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
