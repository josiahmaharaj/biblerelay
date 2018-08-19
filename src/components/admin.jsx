import React, { Component } from "react";
import firebase from "firebase";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveStatus: [],
      recordStatus: []
    };
  }
  componentDidMount() {
    const db = firebase.firestore();
    const docRef = db.collection("day").doc("liveStatus");
    docRef.onSnapshot(
      function(doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          const fs_lStatus = doc.get("live");
          this.setState({
            liveStatus: fs_lStatus
          });
        } else {
          console.log("No such document!");
        }
      }.bind(this)
    );
    //   .catch(function(error) {
    //     console.log("Error getting document:", error);
    //   });
    const docRef2 = db.collection("day").doc("recordStatus");
    docRef2.onSnapshot(
      function(doc) {
        if (doc.exists) {
          // console.log("Document data:", doc.data());
          const fs_rStatus = doc.get("record");
          this.setState({
            recordStatus: fs_rStatus
          });
        } else {
          console.log("No such document!");
        }
      }.bind(this)
    );
    // .catch(function(error) {
    //   console.log("Error getting document:", error);
    // });
  }
  render() {
    return (
      <div className="container">
        <h1>Sets</h1>
        <div className="row">
          <h1>yest</h1>
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
