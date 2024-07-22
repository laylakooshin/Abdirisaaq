// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx03cN_m2rcnXwnryAJxGiDJ457H_SbMg",

  authDomain: "reminder-ea114.firebaseapp.com",
  projectId: "reminder-ea114",
  storageBucket: "reminder-ea114.appspot.com",
  messagingSenderId: "354965171696",
  appId: "1:354965171696:web:f8daa663ec2c4a0a534135",
  measurementId: "G-0J0KDLHBFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }