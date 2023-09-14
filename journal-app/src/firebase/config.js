// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXkE3Gymye8K_9aAgxiKpMECeUZKv7vo0",
  authDomain: "react-cursos-f0bf4.firebaseapp.com",
  projectId: "react-cursos-f0bf4",
  storageBucket: "react-cursos-f0bf4.appspot.com",
  messagingSenderId: "361905081834",
  appId: "1:361905081834:web:dd1d75735e1244c09a3693"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
