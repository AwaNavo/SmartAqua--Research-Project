// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACrPTiWeC3FLd-4RWnLSNd2R3yCp-iuYI",
  authDomain: "testdb-d6d5c.firebaseapp.com",
  databaseURL: "https://testdb-d6d5c-default-rtdb.firebaseio.com",
  projectId: "testdb-d6d5c",
  storageBucket: "testdb-d6d5c.appspot.com",
  messagingSenderId: "357066795399",
  appId: "1:357066795399:web:fccf068cc603db06a90b22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };
