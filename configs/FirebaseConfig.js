// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // GET YOUR CONFIG IN FIREBASE PLATFORM
    apiKey: "AIzaSyD-X46OicDZaYT-SI7spH-u8BWDf80bKI4",
    authDomain: "my-projects-f11a0.firebaseapp.com",
    projectId: "my-projects-f11a0",
    storageBucket: "my-projects-f11a0.firebasestorage.app",
    messagingSenderId: "742350176697",
    appId: "1:742350176697:web:1e5a31817facb4e2ff7668",
    measurementId: "G-MKTLBNFTCD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);