import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { css } from "react-emotion";
import "aos/dist/aos.css";
import AOS from "aos";

import Nav from "./components/nav";
import Card_Layout from "./components/card_layout";
import Player from "./components/player";
import ErrorPage from "./components/error_page";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Admin from "./components/admin";
import LoginContainer from "./components/Login/";
import firebase from "./components/firestore";
import PrivateRoute from "./components/privateroutes";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class App extends Component {
  constructor() {
    super();
    this.state = { loading: true, authenticated: false, user: null };
  }
  componentDidMount() {
    AOS.init({
      once: true,
      duration: 2000
    });
    this.setState({ loading: false });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return (
        <div className="sweet-loading container text-center">
          <SyncLoader
            className={override}
            sizeUnit={"px"}
            size={10}
            color={"#dc3545"}
            loading={this.state.loading}
          />
        </div>
      );
    }
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Card_Layout} />
            <Route path="/watch/:id" component={Player} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute
              exact
              path="/admin"
              component={Admin}
              authenticated={this.state.authenticated}
            />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
