import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Card from "./card";

class Card_Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* DAY 1 */}
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="/watch/1">
              <Card
                day="Day 1"
                bkImg="https://s3.amazonaws.com/twec/trueworshippers-assets/calvin_tyrell.png"
              />
            </NavLink>
          </div>
          {/* DAY 2 */}
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="watch/2">
              <Card day="Day 2" />
            </NavLink>
          </div>
          {/* DAY 3 */}
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="watch/3">
              <Card day="Day 3" />
            </NavLink>
          </div>
        </div>
        {/* DAY 4 */}
        <div className="row">
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="watch/4">
              <Card day="Day 4" />
            </NavLink>
          </div>
          {/* DAY 5 */}
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="watch/5">
              <Card day="Day 5" />
            </NavLink>
          </div>
          {/* DAY 6 */}
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="watch/6">
              <Card day="Day 6" />
            </NavLink>
          </div>
        </div>
        <div className="row">
          {/* DAY 7 */}
          <div className="col-12 col-sm-4 mt-4">
            <NavLink to="watch/7">
              <Card day="Day 7" />
            </NavLink>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Card_Layout;
