// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCjCPJS0CLcwSyJqkHDJ1rZjKZHt_VW75s",
  authDomain: "financetracker-1bb69.firebaseapp.com",
  projectId: "financetracker-1bb69",
  storageBucket: "financetracker-1bb69.firebasestorage.app",
  messagingSenderId: "608591105008",
  appId: "1:608591105008:web:8df6741c903148f60deb35",
  measurementId: "G-H0D42PPQEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };