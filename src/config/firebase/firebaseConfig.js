// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX5RKzwWdHUBEJ_ODS7RbnQuKJ2LXJchs",
  authDomain: "react-login-2bb81.firebaseapp.com",
  projectId: "react-login-2bb81",
  storageBucket: "react-login-2bb81.appspot.com",
  messagingSenderId: "812697405912",
  appId: "1:812697405912:web:e13b3541e3d8ee0a850aad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
