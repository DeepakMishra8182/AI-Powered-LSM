import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "learningmanagementsystem-1bd5e.firebaseapp.com",
  projectId: "learningmanagementsystem-1bd5e",
  storageBucket: "learningmanagementsystem-1bd5e.firebasestorage.app",
  messagingSenderId: "803369483516",
  appId: "1:803369483516:web:816663cfceff5e8127eb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}