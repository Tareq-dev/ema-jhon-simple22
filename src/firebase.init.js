// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfXMkAFZk6I4neejgJywj_4tsgDV1h2gA",
  authDomain: "ema-jhon-e3fc7.firebaseapp.com",
  projectId: "ema-jhon-e3fc7",
  storageBucket: "ema-jhon-e3fc7.appspot.com",
  messagingSenderId: "934907534159",
  appId: "1:934907534159:web:7a3fd818ba2a9ed60b033a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
