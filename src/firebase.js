import firebase from "firebase/app"
import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBiMcQrTtRyHwRDKq_4JSLHcy_XVwxozo8",
    authDomain: "reactproject-dev-c7c41.firebaseapp.com",
    projectId: "reactproject-dev-c7c41",
    storageBucket: "reactproject-dev-c7c41.appspot.com",
    messagingSenderId: "947608581659",
    appId: "1:947608581659:web:fc55afa667d342db746abe",
    measurementId: "G-4TPRHKQ9H4"
  });
  
  // Initialize Firebase
export const auth = app.auth();
export default app;