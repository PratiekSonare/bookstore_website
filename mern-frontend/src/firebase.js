// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA678IONC2gVeg5LB7OtpHoPSnknbLuec4",
  authDomain: "psaj-book-store.firebaseapp.com",
  projectId: "psaj-book-store",
  storageBucket: "psaj-book-store.appspot.com",
  messagingSenderId: "288507080043",
  appId: "1:288507080043:web:054bc0325745c340fe702e",
  measurementId: "G-8QYGNK0QNL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, firebaseConfig };
