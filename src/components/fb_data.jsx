// import React from "react";
import firebase from "./firestore";

const FSdata = () => {
  const db = firebase.firestore();
  const docRef = db.collection("Day").doc("day1");

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  return null;
};

export default FSdata;
