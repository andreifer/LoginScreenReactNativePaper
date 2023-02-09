// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiAxH2Pq6gSJPg0Xmy4k-HI4dBr9Ii_jI",
  authDomain: "aulalogin-ba87c.firebaseapp.com",
  projectId: "aulalogin-ba87c",
  storageBucket: "aulalogin-ba87c.appspot.com",
  messagingSenderId: "287361229721",
  appId: "1:287361229721:web:c6c09ab8a9ab222d52a908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);