// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzBeC_h31gZZMLyFHE7Er7NTgqE49rhAM",
  authDomain: "eccomerce-mangas.firebaseapp.com",
  projectId: "eccomerce-mangas",
  storageBucket: "eccomerce-mangas.appspot.com",
  messagingSenderId: "372257075860",
  appId: "1:372257075860:web:3ef7fd69288920c1973a81",
  measurementId: "G-SYKM2BJ0KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);