// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBia1dcvWo2btFA_YrsIaTethXNaWKqWGg",
  authDomain: "hasnur-cd815.firebaseapp.com",
  projectId: "hasnur-cd815",
  storageBucket: "hasnur-cd815.appspot.com",
  messagingSenderId: "481969686344",
  appId: "1:481969686344:web:21c0d7d8a55fadbc13557d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)