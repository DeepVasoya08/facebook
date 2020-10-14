import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxhZF78FNXDdma6EDou7FnYb6eYfaCcOA",
  authDomain: "facebookclone00.firebaseapp.com",
  databaseURL: "https://facebookclone00.firebaseio.com",
  projectId: "facebookclone00",
  storageBucket: "facebookclone00.appspot.com",
  messagingSenderId: "185796318759",
  appId: "1:185796318759:web:ee715dd2c3446d3d176002",
  measurementId: "G-B7JLQ1V4BW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { provider, auth };
