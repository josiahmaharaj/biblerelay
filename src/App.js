import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import Nav from "./components/nav";
import Card_Layout from "./components/card_layout";
import Player from "./components/player";
import ErrorPage from "./components/error_page";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";

class App extends Component {
  componentDidMount() {
    AOS.init({
      once: true,
      duration: 2000
    });
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
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
    );
  }
}

export default App;
