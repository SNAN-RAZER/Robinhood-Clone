// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAzzW8NLJznOg0QqGwR8ZGpZ1cqJwFVqLk",
  authDomain: "robinhood-29875.firebaseapp.com",
  projectId: "robinhood-29875",
  storageBucket: "robinhood-29875.appspot.com",
  messagingSenderId: "887476766406",
  appId: "1:887476766406:web:adfe4ec72280563ddf79c7",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };