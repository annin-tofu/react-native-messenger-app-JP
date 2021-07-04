// below credentials are copied and pasted from Firebase. Config in Project Settings.

// https://docs.expo.io/guides/using-firebase/

// "*" means ALL
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8WjzZJVXlh-M4j2EA6vm3FLqPQq80xDE",
  authDomain: "messenger-app-react-native.firebaseapp.com",
  projectId: "messenger-app-react-native",
  storageBucket: "messenger-app-react-native.appspot.com",
  messagingSenderId: "597249028217",
  appId: "1:597249028217:web:9703b4670cf6835387a4a8",
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
