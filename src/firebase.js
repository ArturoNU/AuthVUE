import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE1h7aninoOOZUsKfaEYnPRSkzr9YjMbM",
    authDomain: "primerafb-8b8e4.firebaseapp.com",
    databaseURL: "https://primerafb-8b8e4.firebaseio.com",
    projectId: "primerafb-8b8e4",
    storageBucket: "primerafb-8b8e4.appspot.com",
    messagingSenderId: "765809200974",
    appId: "1:765809200974:web:2dc945683c9043d55bd81f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };