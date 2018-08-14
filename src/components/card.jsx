import React, { Component } from "react";

class Card extends Component {
  render() {
    const Background = this.props.bkImg;
    console.log(Background);
    const imageBackground = {
      color: "white",
      backgroundImage: "url(" + Background + ")",
      backgroundSize: "cover",
      WebkitTransition: "all", // note the capital 'W' here
      msTransition: "all" // 'ms' is the only lowercase vendor prefix
    };
    return (
      <div className="card mx-auto" style={{ width: "300px", height: "180px" }}>
        <div className="card-body" style={imageBackground} />
      </div>
    );
  }
}

export default Card;
