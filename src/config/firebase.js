// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3uiyu5OvHtCWu4V9ZbokLlFhdskK-XHg",
  authDomain: "aulaloginoficial.firebaseapp.com",
  projectId: "aulaloginoficial",
  storageBucket: "aulaloginoficial.appspot.com",
  messagingSenderId: "834976627685",
  appId: "1:834976627685:web:370b205bd4e9ce6c1c0d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);