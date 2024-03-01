// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOSH1wkIkguG2aO6qniFMaDFpwALJVtoY",
  authDomain: "netflixgpt-b62cc.firebaseapp.com",
  projectId: "netflixgpt-b62cc",
  storageBucket: "netflixgpt-b62cc.appspot.com",
  messagingSenderId: "959752789080",
  appId: "1:959752789080:web:e2cdd21a9c8bd70a8d7e2d",
  measurementId: "G-F57S01WLS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  