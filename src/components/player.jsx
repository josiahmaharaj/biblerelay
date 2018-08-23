import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import YouTube from "react-youtube";
import firebase from "./firestore";
import Alert from "./alert";
import Helmet from "react-helmet";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Day",
      theme: "",
      description: "",
      books: [],
      day: []
    };
  }
  componentWillMount() {
    const db = firebase.firestore();
    const docRef = db.collection("day").doc(this.props.match.params.id);
    docRef.onSnapshot(
      function(doc) {
        const fs_title = doc.exists
          ? doc.get("title")
          : console.log("No such document!");
        const fs_theme = doc.exists
          ? doc.get("theme")
          : console.log("No such document!");
        const fs_description = doc.exists
          ? doc.get("description")
          : console.log("No such document!");
        const fs_books = doc.exists
          ? doc.get("books")
          : this.props.history.push("/");
        this.setState({
          title: fs_title,
          theme: fs_theme,
          description: fs_description,
          books: fs_books
        });
      }.bind(this)
    );

    const docRef2 = db.collection("day").doc("liveStatus");
    docRef2.onSnapshot(
      function(doc) {
        const fs_liveStatus = doc.exists
          ? doc.get("live")
          : console.log("No such document!");
        this.setState({
          day: fs_liveStatus
        });
      }.bind(this)
    );
    // .catch(function(error) {
    //   console.log("Error getting document:", error);
    // });
  }
  render() {
    // YOUTUBE
    const linkID = this.props.match.params.id;
    const streamID = [
      "default",
      "Ih5s8d5y0eA",
      "zZiaZbRVREk",
      "jUdAhCbzqx8",
      "gW_WJLkTxUs",
      "hZFxBbndcN8",
      "IRm0CZuLmkU",
      "inJKuOeAImE"
    ];
    const opts = {
      height: "290",
      width: "540",
      playerVars: {
        autoplay: 1,
        controls: 1,
        modestbranding: 1,
        rel: 0
      }
    };

    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Day {linkID} | Trinidad Bible Relay</title>
          <link
            rel="canonical"
            href={`http://relay.trueworshippers.org/watch/` + linkID}
          />
        </Helmet>
        <div className="row">
          <NavLink to="/">
            <button className="btn btn-sm btn-outline-primary">Back</button>
          </NavLink>
        </div>
        <div className="row">
          <h1 data-aos="fade-up">
            {this.state.title} | {this.state.theme}
          </h1>
        </div>
        <div className="row mb-5">
          <div
            className="embed-responsive embed-responsive-16by9"
            data-aos="flip-left"
          >
            <YouTube videoId={streamID[linkID]} opts={opts} />
          </div>
        </div>
        {this.state.day[linkID - 1] ? <Alert ytid={streamID[linkID]} /> : null}
        <div className="row jumbotron" data-aos="fade-up">
          <h3>Description</h3>
          <br />
          {this.state.description}
          <br />
          <br />
          <h3>Books Read</h3>
          {this.state.books.map(book => {
            return (
              <div className="pt-1" key={book}>
                <ul>
                  <li key={book}>{book}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Player;
