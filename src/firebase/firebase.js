// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration (from .env)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-unK_KuIXbUQfIR97Np9yIdSQsnqT00g",
  authDomain: "students-tolike.firebaseapp.com",
  projectId: "students-tolike",
  storageBucket: "students-tolike.firebasestorage.app",
  messagingSenderId: "140550868247",
  appId: "1:140550868247:web:d4c3a9976b3f257886bb52",
  measurementId: "G-DN5PY9ZSQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;
