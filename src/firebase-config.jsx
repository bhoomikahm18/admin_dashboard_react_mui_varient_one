// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEZ6MWoHMXHoxl9KuuCC4rTv6PDYxa4Ag",
    authDomain: "react-firebase-36853.firebaseapp.com",
    projectId: "react-firebase-36853",
    storageBucket: "react-firebase-36853.appspot.com",
    messagingSenderId: "686825597395",
    appId: "1:686825597395:web:04cfac53273d794362a726",
    measurementId: "G-B9GTWTPSNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);