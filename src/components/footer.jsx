import React from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";

const Footer = () => {
  return (
    <footer className="blog-footer mt-5">
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-sm-6 col-12">
            {" "}
            <p className="share">Share the Word of God</p>
            <Social />
          </div>
          <div className="col-sm-6 col-12">
            <p>Special thanks to those who gave their support</p>
            <NavLink to="/contact">
              <img
                className="lighttech img-thumbnail"
                src="https://s3.amazonaws.com/twec/reading-relay/lighttech.png"
                alt="light_tech"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="last-footer pt-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-12">
              <img
                className="footer-logo"
                src={require("../assets/relaylogo.png")}
                alt=""
              />
              <p>
                &copy;{" "}
                <a
                  href="https://trueworshippers.org"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  T.W.E.C
                </a>{" "}
                2018
              </p>
            </div>
            <div className="col-sm-6 col-12 brand">
              <p>
                Website Designed and Developed by{" "}
                <a
                  href="https://josiahmaharaj.com"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Josiah Maharaj
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
