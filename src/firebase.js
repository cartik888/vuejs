import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBvF1Y_O_O7mYRnafOmQbTGMKPTXr1Flic",
  authDomain: "curd-e24e0.firebaseapp.com",
  projectId: "curd-e24e0",
  storageBucket: "curd-e24e0.appspot.com",
  messagingSenderId: "232993952704",
  appId: "1:232993952704:web:fdc8b8828a12db019c2e25",
  measurementId: "G-8K0XP889HL"
};

firebase.initializeApp(config);

export default firebase.database();
