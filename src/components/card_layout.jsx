import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Card from "./card";
import firebase from "firebase";

class Card_Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: [],
      record: []
    };
  }
  componentWillMount() {
    const db = firebase.firestore();
    const docRef = db.collection("day").doc("liveStatus");
    docRef.onSnapshot(
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
    const docRef2 = db.collection("day").doc("recordStatus");
    docRef2.onSnapshot(
      function(doc) {
        const fs_recordStatus = doc.exists
          ? doc.get("record")
          : console.log("No such document!");
        this.setState({
          record: fs_recordStatus
        });
      }.bind(this)
    );
    // .catch(function(error) {
    //   console.log("Error getting document:", error);
    // });
  }
  render() {
    let liveStatus1 = this.state.day[0] ? "LIVE" : ""; // Ternary operator
    let liveStatus2 = this.state.day[1] ? "LIVE" : ""; // Ternary operator
    let liveStatus3 = this.state.day[2] ? "LIVE" : ""; // Ternary operator
    let liveStatus4 = this.state.day[3] ? "LIVE" : ""; // Ternary operator
    let liveStatus5 = this.state.day[4] ? "LIVE" : ""; // Ternary operator
    let liveStatus6 = this.state.day[5] ? "LIVE" : ""; // Ternary operator
    let liveStatus7 = this.state.day[6] ? "LIVE" : ""; // Ternary operator
    let recordStatus1 = this.state.record[0] ? "Recorded" : ""; // Ternary operator
    let recordStatus2 = this.state.record[1] ? "Recorded" : ""; // Ternary operator
    let recordStatus3 = this.state.record[2] ? "Recorded" : ""; // Ternary operator
    let recordStatus4 = this.state.record[3] ? "Recorded" : ""; // Ternary operator
    let recordStatus5 = this.state.record[4] ? "Recorded" : ""; // Ternary operator
    let recordStatus6 = this.state.record[5] ? "Recorded" : ""; // Ternary operator
    let recordStatus7 = this.state.record[6] ? "Recorded" : ""; // Ternary operator
    return (
      <div className="container">
        <div className="row">
          {/* DAY 1 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-down-right">
            <NavLink to="/watch/1" live={liveStatus1}>
              <Card
                day="Day 1"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day1_thumbnail.png"
                date="19 Aug, 2018"
                live={liveStatus1}
                record={recordStatus1}
              />
            </NavLink>
          </div>
          {/* DAY 2 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-down">
            <NavLink to="watch/2">
              <Card
                day="Day 2"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day2_thumbnail.png"
                date="20 Aug, 2018"
                live={liveStatus2}
                record={recordStatus2}
              />
            </NavLink>
          </div>
          {/* DAY 3 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-down-left">
            <NavLink to="watch/3">
              <Card
                day="Day 3"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day3_thumbnail.png"
                date="21 Aug, 2018"
                live={liveStatus3}
                record={recordStatus3}
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
                date="22 Aug, 2018"
                live={liveStatus4}
                record={recordStatus4}
              />
            </NavLink>
          </div>
          {/* DAY 5 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-up">
            <NavLink to="watch/5">
              <Card
                day="Day 5"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day5_thumbnail.png"
                date="23 Aug, 2018"
                live={liveStatus5}
                record={recordStatus5}
              />
            </NavLink>
          </div>
          {/* DAY 6 */}
          <div className="col-12 col-sm-4 mt-4" data-aos="fade-left">
            <NavLink to="watch/6">
              <Card
                day="Day 6"
                bkImg="https://s3.amazonaws.com/twec/reading-relay/day6_thumbnail.png"
                date="24 Aug, 2018"
                live={liveStatus6}
                record={recordStatus6}
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
                date="25 Aug, 2018"
                live={liveStatus7}
                record={recordStatus7}
              />
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Card_Layout;
