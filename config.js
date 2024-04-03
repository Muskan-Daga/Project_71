import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC7-rNhtqMCE-R_BVOZGGhIhLQez9JtEJc",
    authDomain: "project71-1859a.firebaseapp.com",
    projectId: "project71-1859a",
    storageBucket: "project71-1859a.appspot.com",
    messagingSenderId: "73745732453",
    appId: "1:73745732453:web:8b57d4b50f8c450b77c78c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
