import React from "react";
import Social from "./social";

const Footer = () => {
  return (
    <div className="container">
      <footer className="blog-footer mt-5 mb-5">
        <hr />
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
          <div className="col-sm-6 col-12">
            <p>Share the Word of God</p>
            <Social />
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
      </footer>
    </div>
  );
};

export default Footer;
