// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const enviroment = {
  production: false,
  firebaseConfig = {
    apiKey: "AIzaSyCPx3vbidAUYpJ4tWYhbzJ9c74XT9SYCr0",
    authDomain: "lab-032-5c834.firebaseapp.com",
    projectId: "lab-032-5c834",
    storageBucket: "lab-032-5c834.appspot.com",
    messagingSenderId: "814042405432",
    appId: "1:814042405432:web:b6a1c5ef98000a973e64cd",
    measurementId: "G-HR4G2KXL0K"
  }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);