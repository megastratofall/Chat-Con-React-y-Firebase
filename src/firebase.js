import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCevn13Vl9k56jCo82uP14Xalrgcx7Vo64",
  authDomain: "login-system-541b2.firebaseapp.com",
  projectId: "login-system-541b2",
  storageBucket: "login-system-541b2.appspot.com",
  messagingSenderId: "492439252294",
  appId: "1:492439252294:web:44709e9e340d3cd5544947"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { db, auth, provider };
