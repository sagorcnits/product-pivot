// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRzrN6QFYnRCxWy0kvj8SIrZdzLCgPuEM",
  authDomain: "product-pivot.firebaseapp.com",
  projectId: "product-pivot",
  storageBucket: "product-pivot.appspot.com",
  messagingSenderId: "313575800735",
  appId: "1:313575800735:web:4f7cb3b662aebc398907aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
