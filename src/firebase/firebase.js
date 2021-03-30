import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCeFqZ1zZq68n0S8Q1DFIdBOfYAEYryOmo",
  authDomain: "linkedin-1f443.firebaseapp.com",
  projectId: "linkedin-1f443",
  storageBucket: "linkedin-1f443.appspot.com",
  messagingSenderId: "830165128604",
  appId: "1:830165128604:web:46b814e0f996c009a1e459",
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

let db = firebaseApp.firestore();
let auth = firebaseApp.auth();

export { db, auth };
