// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVMmZH64P4AlcDx-Io89aFw2CksKiZBj8",
  authDomain: "apps-talk-better.firebaseapp.com",
  projectId: "apps-talk-better",
  storageBucket: "apps-talk-better.appspot.com",
  messagingSenderId: "858709956400",
  appId: "1:858709956400:web:85f88651d919e4f3c41af5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);