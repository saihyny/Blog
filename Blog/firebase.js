// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flarebytez.firebaseapp.com",
  projectId: "flarebytez",
  storageBucket: "flarebytez.firebasestorage.app",
  messagingSenderId: "107055742469",
  appId: "1:107055742469:web:b95184d76bc559adab666c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);