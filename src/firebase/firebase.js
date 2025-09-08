// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjeGMpTMcyTK53FyK3K_H0L2p6BALuvSY",
  authDomain: "students-toolkit-3e5ab.firebaseapp.com",
  projectId: "students-toolkit-3e5ab",
  storageBucket: "students-toolkit-3e5ab.appspot.com", // <-- ঠিক করা হয়েছে
  messagingSenderId: "276282027103",
  appId: "1:276282027103:web:18d618b50bf9ad21e8ffea",
  measurementId: "G-SRGJ1C9GRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// Export services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
