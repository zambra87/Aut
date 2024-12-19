// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwNaM331PyFgMBwkE6kCXTfK8yLZFgCHg",
  authDomain: "fir-auth-461aa.firebaseapp.com",
  projectId: "fir-auth-461aa",
  storageBucket: "fir-auth-461aa.appspot.com", // Corregí "firebasestorage.app" por "appspot.com"
  messagingSenderId: "696323566964",
  appId: "1:696323566964:web:9917c1b42de62051ef9021",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Cambié "app" a "firebaseApp" para ser consistente

export default firebaseApp;
