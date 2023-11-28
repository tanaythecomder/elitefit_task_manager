// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFzGuJBQ-2Kf8v9ysAzYy1lRrnA9geSno",
  authDomain: "vite-contace.firebaseapp.com",
  projectId: "vite-contact",
  storageBucket: "vite-contace.appspot.com",
  messagingSenderId: "322827352119",
  appId: "1:322827352119:web:fb7373be10f1f4de15e7b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)