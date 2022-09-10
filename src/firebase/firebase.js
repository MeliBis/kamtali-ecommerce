// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7QlYGYcGDKNDn4oCzE-1VcrT7L-J9JDI",
  authDomain: "fir-kamtali.firebaseapp.com",
  projectId: "fir-kamtali",
  storageBucket: "fir-kamtali.appspot.com",
  messagingSenderId: "270634467098",
  appId: "1:270634467098:web:b5ff5e293f68d7df11f6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);