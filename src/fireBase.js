// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  getDocs,
  getFirestore,
  query,
  where,
  collection,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOdrOKyGGczuUPPuSBN24_I1RBfNYAlOM",
  authDomain: "startup-7c345.firebaseapp.com",
  databaseURL: "https://startup-7c345-default-rtdb.firebaseio.com",
  projectId: "startup-7c345",
  storageBucket: "startup-7c345.appspot.com",
  messagingSenderId: "70514690190",
  appId: "1:70514690190:web:5dc1e372e10634809521df",
  measurementId: "G-XTJW7LTWBJ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

