import React, { Component } from "react";
import firebase from "./firestore";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveStatus: [],
      recordStatus: [],
      newArray: [true, true, false, false, false, false, false]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const live = this.state.liveStatus;
    e.target.value;
    // update state
    this.setState({
      live
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("day")
      .doc("liveStatus")
      .set({
        live: this.state.liveStatus
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
  componentDidMount() {
    const db = firebase.firestore();
    const docRef = db.collection("day").doc("liveStatus");
    docRef.onSnapshot(
      function(doc) {
        if (doc.exists) {
          const fs_lStatus = doc.get("live");
          this.setState({
            liveStatus: fs_lStatus
          });
        } else {
          console.log("No such document!");
        }
      }.bind(this)
    );
    const docRef2 = db.collection("day").doc("recordStatus");
    docRef2.onSnapshot(
      function(doc) {
        if (doc.exists) {
          const fs_rStatus = doc.get("record");
          this.setState({
            recordStatus: fs_rStatus
          });
        } else {
          console.log("No such document!");
        }
      }.bind(this)
    );
  }
  render() {
    return (
      <div className="container">
        <h1>Sets</h1>
        <div className="row">
          <form className="form-inline" onSubmit={e => this.handleSubmit(e)}>
            <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
              Day 1
            </label>
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              value={this.state.liveStatus}
              onChange={this.handleChange}
            >
              <option value="true">LIVE</option>
              <option value="false">NOT LIVE</option>
            </select>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <h1>Views</h1>
        <div className="row">
          <div className="col-12 col-sm-6">
            <h3>Live Status</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.liveStatus.map((status, x) => {
                  return (
                    <tr key={x}>
                      <td key={x}>Day {x + 1}</td>
                      <td>{status ? "Live" : "NOT Live"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-sm-6">
            <h3>Record Status</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.recordStatus.map((status, x) => {
                  return (
                    <tr key={x}>
                      <td key={x}>Day {x + 1}</td>
                      <td>{status ? "Recorded" : "NOT Recorded"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
