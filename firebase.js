// below credentials are copied and pasted from Firebase. Config in Project Settings.

// https://docs.expo.io/guides/using-firebase/

// "*" means ALL
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaLhborj5CvsTmMPi8M0p407-_GFxhs-0",
  authDomain: "react-native-messenger-app-jp.firebaseapp.com",
  projectId: "react-native-messenger-app-jp",
  storageBucket: "react-native-messenger-app-jp.appspot.com",
  messagingSenderId: "746692006279",
  appId: "1:746692006279:web:998d61ff0e818d66418322",
};

// "let", unlike const or function, allows changing the variables
let app;

//next line means that ONLY IF we havent initilized yet. We DO NOT WANT to keep INITIALIZING!!
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);

//set up firebase db variable
const db = app.firestore();
//set up firebase auth variable. It is NOT RECOMMENDED TO USE "app.auth". Use "firebase.auth"
const auth = firebase.auth();

export { db, auth };
