import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC2RNpBu34rB5io670ezGjV0tjvsXydJ90",
  authDomain: "tailored-diet-6d919.firebaseapp.com",
  projectId: "tailored-diet-6d919",
  storageBucket: "tailored-diet-6d919.appspot.com",
  messagingSenderId: "60522469158",
  appId: "1:60522469158:web:315cbb2849ccff8e3e13e7",
  measurementId: "G-ES78WWYFLL"
});

  const db = firebaseApp.firestore();  /*access the db*/
  const auth = firebase.auth(); /*for authentication, create users, login, logout*/
  const storage = firebase.storage();   /* for uploading pictures to firebase and storing in db */

  export {db, auth, storage};