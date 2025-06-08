// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  onChildRemoved,
   // if you are using remove()
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA35Mt-XQkPjIXbPVh79KJtPw8gaYijlXA",
  authDomain: "jspquiz-98968.firebaseapp.com",
  projectId: "jspquiz-98968",
  storageBucket: "jspquiz-98968.firebasestorage.app",
  messagingSenderId: "861943292608",
  appId: "1:861943292608:web:f3e53ef5c5d35df44c8325",
  measurementId: "G-R2ZXJFBX2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database, ref, set, onValue , remove, onChildRemoved,
};