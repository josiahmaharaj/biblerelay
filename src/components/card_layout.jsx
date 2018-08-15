import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Card from "./card";

class Card_Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* DAY 1 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-down-right">
            <NavLink to="/watch/1">
              <Card
                day="Day 1"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day1_thumbnail.png"
              />
            </NavLink>
          </div>
          {/* DAY 2 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-down">
            <NavLink to="watch/2">
              <Card
                day="Day 2"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day2_thumbnail.png"
              />
            </NavLink>
          </div>
          {/* DAY 3 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-down-left">
            <NavLink to="watch/3">
              <Card
                day="Day 3"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day3_thumbnail.png"
              />
            </NavLink>
          </div>
        </div>
        {/* DAY 4 */}
        <div className="row">
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-right">
            <NavLink to="watch/4">
              <Card
                day="Day 4"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day4_thumbnail.png"
              />
            </NavLink>
          </div>
          {/* DAY 5 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-up">
            <NavLink to="watch/5">
              <Card
                day="Day 5"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day5_thumbnail.png"
              />
            </NavLink>
          </div>
          {/* DAY 6 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-left">
            <NavLink to="watch/6">
              <Card
                day="Day 6"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day6_thumbnail.png"
              />
            </NavLink>
          </div>
        </div>
        <div className="row">
          {/* DAY 7 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-up-right">
            <NavLink to="watch/7">
              <Card
                day="Day 7"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day7_thumbnail.png"
              />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Card_Layout;
