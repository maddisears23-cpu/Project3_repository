// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI7HUDLdF-Z66dBqZyIJTA2k3CzMr3GOo",
  authDomain: "finalproject-dda3e.firebaseapp.com",
  projectId: "finalproject-dda3e",
  storageBucket: "finalproject-dda3e.firebasestorage.app",
  messagingSenderId: "781529466480",
  appId: "1:781529466480:web:b6f4134551b68d6e90d6b5",
  measurementId: "G-6JL3WV90GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);