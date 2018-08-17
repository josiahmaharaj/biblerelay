import React, { Component } from "react";

class Card extends Component {
  render() {
    const Background = this.props.bkImg;
    const imageBackground = {
      color: "white",
      backgroundImage: "url(" + Background + ")",
      backgroundSize: "cover",
      WebkitTransition: "all", // note the capital 'W' here
      msTransition: "all" // 'ms' is the only lowercase vendor prefix
    };
    return (
      <div className="card mx-auto">
        <div className="card-body" style={imageBackground} />
        <p className="card-text">
          {this.props.date}{" "}
          <span className="badge badge-danger">{this.props.live}</span>
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Card;
