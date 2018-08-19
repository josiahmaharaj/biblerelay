import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { css } from "react-emotion";
import "aos/dist/aos.css";
import AOS from "aos";
import Helmet from "react-helmet";
import ReactGA from "react-ga";

import Nav from "./components/nav";
import Card_Layout from "./components/card_layout";
import Player from "./components/player";
import ErrorPage from "./components/error_page";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
ReactGA.initialize("UA-96334081-2", {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    AOS.init({
      once: true,
      duration: 2000
    });
    this.setState({ loading: false });
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | Trinidad Bible Relay</title>
          <link rel="canonical" href="http://relay.trueworshippers.org/" />
        </Helmet>
        <Router>
          <React.Fragment>
            <Nav />
            <div className="sweet-loading container text-center">
              <SyncLoader
                className={override}
                sizeUnit={"px"}
                size={10}
                color={"#dc3545"}
                loading={this.state.loading}
              />
            </div>
            <Switch>
              <Route exact path="/" component={Card_Layout} />
              <Route path="/watch/:id" component={Player} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
