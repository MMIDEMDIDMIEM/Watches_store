// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_I_ObUcg92pgsFA87N4nY1jqi4_hUbE",
  authDomain: "watch-store-6e3a4.firebaseapp.com",
  projectId: "watch-store-6e3a4",
  storageBucket: "watch-store-6e3a4.firebasestorage.app",
  messagingSenderId: "682540012729",
  appId: "1:682540012729:web:3b67b0a0346de8f2203768",
  measurementId: "G-NL92LXVET0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);