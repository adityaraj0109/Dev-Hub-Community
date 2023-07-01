// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgxMVKK8rAAyI2eAoIl1vQHKwUWlv4BU8",
  authDomain: "devhub-community.firebaseapp.com",
  projectId: "devhub-community",
  storageBucket: "devhub-community.appspot.com",
  messagingSenderId: "1092994375148",
  appId: "1:1092994375148:web:ba6782bc9c95f6f396f4c9",
  measurementId: "G-WHQHSD1J83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();
