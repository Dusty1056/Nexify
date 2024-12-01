// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "nexify-60956.firebaseapp.com",
  projectId: "nexify-60956",
  storageBucket: "nexify-60956.firebasestorage.app",
  messagingSenderId: "588092355651",
  appId: "1:588092355651:web:63f690a66123a2a8c790f6",
  measurementId: "G-4CPGVRGFZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);