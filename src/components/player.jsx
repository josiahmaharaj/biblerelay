import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import YouTube from "react-youtube";

class Player extends Component {
  render() {
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
    // if (linkID === 1) {
    //   const streamID = "2g811Eo7K8U";
    // }
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        controls: 1,
        modestbranding: 1,
        rel: 0
      }
    };
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/">
            <button className="btn btn-sm btn-outline-primary">Back</button>
          </NavLink>
        </div>
        <h1>Player {this.props.match.params.id}</h1>
        <div className="row mb-5">
          <div class="embed-responsive embed-responsive-16by9">
            <YouTube videoId={streamID[linkID]} opts={opts} />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
