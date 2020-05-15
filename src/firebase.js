import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "codenames-ef03e.firebaseapp.com",
    databaseURL: "https://codenames-ef03e.firebaseio.com",
    projectId: "codenames-ef03e",
    storageBucket: "codenames-ef03e.appspot.com",
    messagingSenderId: "911491320958",
    appId: "1:911491320958:web:29ffd86eb6c927b1761c2f",
    measurementId: "G-R0HT8CZXEE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const analytics = firebase.analytics();
