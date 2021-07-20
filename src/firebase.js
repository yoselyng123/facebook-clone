import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLDlDckQTykaGTJLYnDCRcSxg5kyC9zJ4",
    authDomain: "facebook-clone-6120c.firebaseapp.com",
    projectId: "facebook-clone-6120c",
    storageBucket: "facebook-clone-6120c.appspot.com",
    messagingSenderId: "557736349737",
    appId: "1:557736349737:web:c2a0acaba1ece078718c38",
    measurementId: "G-MKLMP8DBHB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider, firebaseApp };
export default db;