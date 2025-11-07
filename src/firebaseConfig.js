// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUWvH4QZgEFnyK9mV3ftn5sCBgBeVWRsw",
  authDomain: "quiz-app-auth-d3ef3.firebaseapp.com",
  projectId: "quiz-app-auth-d3ef3",
  storageBucket: "quiz-app-auth-d3ef3.firebasestorage.app",
  messagingSenderId: "1076902239389",
  appId: "1:1076902239389:web:c9f5195fd0e25a0edcc874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
