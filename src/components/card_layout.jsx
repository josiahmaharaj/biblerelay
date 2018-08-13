import React, { Component } from "react";
import Card from "./card";

class Card_Layout extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <Card day="Day 1" />
          </div>
          <div className="col-12 col-sm-4">
            <Card day="Day 2" />
          </div>
          <div className="col-12 col-sm-4">
            <Card day="Day 3" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-4">
            <Card day="Day 4" />
          </div>
          <div className="col-12 col-sm-4">
            <Card day="Day 5" />
          </div>
          <div className="col-12 col-sm-4">
            <Card day="Day 6" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-sm-4">
            <Card day="Day 7" />
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Card_Layout;
