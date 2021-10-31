import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2S_80aMKHBtMMQoOdiVUxso5FAPyDdXg",
  authDomain: "clone-92857.firebaseapp.com",
  projectId: "clone-92857",
  storageBucket: "clone-92857.appspot.com",
  messagingSenderId: "15544666264",
  appId: "1:15544666264:web:b9d1622793393afe0ba8ed",
  measurementId: "G-GWND2QYYBL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};