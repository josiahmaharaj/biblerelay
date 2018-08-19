import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div className="alert alert-primary" role="alert">
        Chat, Comment and Like on Youtube >{" "}
        <a
          href={`https://www.youtube.com/watch?v=` + this.props.ytid}
          target="blank"
          rel="noopener noreferrer"
        >
          Click Here!
        </a>
      </div>
    );
  }
}

export default Alert;
