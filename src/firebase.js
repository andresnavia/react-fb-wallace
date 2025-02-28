import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA1cH1YQZUKb50QiFj2kP3hHXfa7-UuE0M",
  authDomain: "react-wallace.firebaseapp.com",
  projectId: "react-wallace",
  storageBucket: "react-wallace.firebasestorage.app",
  messagingSenderId: "1055399988041",
  appId: "1:1055399988041:web:1cd775c9047ba6e0006898",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
