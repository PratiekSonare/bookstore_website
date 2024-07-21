// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA678IONC2gVeg5LB7OtpHoPSnknbLuec4",
  authDomain: "psaj-book-store.firebaseapp.com",
  projectId: "psaj-book-store",
  storageBucket: "psaj-book-store.appspot.com",
  messagingSenderId: "288507080043",
  appId: "1:288507080043:web:054bc0325745c340fe702e",
  measurementId: "G-8QYGNK0QNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };