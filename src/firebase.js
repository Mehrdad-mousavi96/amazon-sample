import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKZf_PLCrmT7Rcz5invP9GwMObx8SAkWk",
  authDomain: "clone-204a1.firebaseapp.com",
  projectId: "clone-204a1",
  storageBucket: "clone-204a1.appspot.com",
  messagingSenderId: "610244447286",
  appId: "1:610244447286:web:1af8f5ae12eb1336a79c97",
  measurementId: "G-BFGVL6RP0X"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
    

