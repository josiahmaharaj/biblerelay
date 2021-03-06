import React, { Component } from "react";
import firebase from "./firestore";
import Select from "react-select";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveStatus: [],
      recordStatus: [],
      FirebaseStateAlert: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // resetAlert() {
  //   this.setState({ FirebaseStateAlert: 0 });
  // }

  handleChange = optionsSelected => {
    // console.log(optionsSelected.id);
    // console.log(optionsSelected.value);
    // console.log("State: " + this.state.liveStatus);
    const liveState = this.state.liveStatus;
    liveState.splice(optionsSelected.id, 1, !optionsSelected.value);
    this.setState({ liveStatus: liveState });
    // console.log("Splice: " + liveState);
  };
  handleChange1 = optionsSelected => {
    // console.log(optionsSelected.id);
    // console.log(optionsSelected.value);
    // console.log("State: " + this.state.liveStatus);
    const recordState = this.state.recordStatus;
    recordState.splice(optionsSelected.id, 1, !optionsSelected.value);
    this.setState({ recordStatus: recordState });
    // console.log("Splice: " + liveState);
  };

  handleSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("day")
      .doc("liveStatus")
      .set({
        live: this.state.liveStatus
      })
      .then(
        function() {
          // console.log("Document Written Successfully");
          this.setState({ FirebaseStateAlert: 1 });
        }.bind(this)
      )
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
  handleSubmit1 = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("day")
      .doc("recordStatus")
      .set({
        record: this.state.recordStatus
      })
      .then(
        function() {
          // console.log("Document Written Successfully");
          this.setState({ FirebaseStateAlert: 1 });
        }.bind(this)
      )
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
    const liveOptions = this.state.liveStatus.map((opt, index) => ({
      id: index,
      label: "Day " + (index + 1),
      value: opt
    }));
    const recordOptions = this.state.recordStatus.map((opt, index) => ({
      id: index,
      label: "Day " + (index + 1),
      value: opt
    }));
    const a = liveOptions.findIndex(opt => opt.value === true);

    function SuccessAlert() {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Document Write Successful
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    function WarningAlert() {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Document Write Unsuccessful
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    function FirebaseAlert(props) {
      const alert = props.alert;
      if (alert === 1) {
        return <SuccessAlert />;
      }
      if (alert === 2) {
        return <WarningAlert />;
      } else {
        return <React.Fragment />;
      }
    }

    return (
      <div className="container">
        {/* SETS**************************************************** */}
        <h1>Sets</h1>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="row">
              <form
                className="form-inline"
                onSubmit={e => this.handleSubmit(e)}
              >
                <h3>Live Update</h3>
                <div className="col-8">
                  <Select
                    options={liveOptions}
                    value={liveOptions[a]}
                    placeholder="Live Status"
                    onChange={this.handleChange}
                    setValue={opt => (opt.value = !opt.value)}
                  />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary" type="submit">
                    Push to Firebase
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="row">
              <form
                className="form-inline"
                onSubmit={e => this.handleSubmit1(e)}
              >
                <h3>Record Update</h3>
                <div className="col-8">
                  <Select
                    options={recordOptions}
                    value={recordOptions[a]}
                    placeholder="Live Status"
                    onChange={this.handleChange1}
                    setValue={opt => (opt.value = !opt.value)}
                  />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary" type="submit">
                    Push to Firebase
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 mt-3">
            <FirebaseAlert alert={this.state.FirebaseStateAlert} />
          </div>
        </div>
        {/* VIEWS************************************************ */}
        <h1>Views</h1>
        <div className="row">
          <div className="col-12 col-sm-6">
            <h3>Live Status</h3>
            <table className="table table-striped">
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
            <table className="table table-striped">
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
