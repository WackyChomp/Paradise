import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "paradise-2f204.firebaseapp.com",
    projectId: "paradise-2f204",
    storageBucket: "paradise-2f204.appspot.com",
    messagingSenderId: "116687576479",
    appId: "1:116687576479:web:80e8577b8b4ad5916231aa",
    measurementId: "G-0ZQPCPLFC5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);     /*pass in firebaseConfig from above to initialize*/

const db = firebaseApp.firestore();        /*initialize the database with live firestore*/
const awth = firebase.auth();

export { db, awth };

