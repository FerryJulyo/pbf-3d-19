import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBauWx4LYTuyQHsLdelB9wYpHnnjq2vJOU",
  authDomain: "belajar-react-8c315.firebaseapp.com",
  databaseURL: "https://belajar-react-8c315-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-react-8c315",
  storageBucket: "belajar-react-8c315.appspot.com",
  messagingSenderId: "852588152528",
  appId: "1:852588152528:web:ad9031114ed8765fdc00d5",
  measurementId: "G-52X7YV91NY"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();