// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXhImG0N1o7R3UJPzJxbzf_zBt6_QvwjE",
  authDomain: "netflixgpt-c556c.firebaseapp.com",
  projectId: "netflixgpt-c556c",
  storageBucket: "netflixgpt-c556c.firebasestorage.app",
  messagingSenderId: "861250372306",
  appId: "1:861250372306:web:a21575bdae3dc41acde30b",
  measurementId: "G-PS461YZRKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();