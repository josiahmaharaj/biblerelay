import firebase from "firebase/app";
import "firebase/app";

const config = {
  apiKey: "AIzaSyCP16SBCUa-grpjgkMW909B_akmJ3dmNVM",
  authDomain: "trinidad-bible-relay.firebaseapp.com",
  databaseURL: "https://trinidad-bible-relay.firebaseio.com",
  projectId: "trinidad-bible-relay",
  storageBucket: "trinidad-bible-relay.appspot.com",
  messagingSenderId: "70057916555"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
const auth = firebase.auth();
firestore.settings(settings);

export { auth };
export default firebase;
