// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh94ROm8HS7ey-yNux2oVSI8zb5lxi_7c",
  authDomain: "pet-care-service-a1049.firebaseapp.com",
  projectId: "pet-care-service-a1049",
  storageBucket: "pet-care-service-a1049.firebasestorage.app",
  messagingSenderId: "196896291039",
  appId: "1:196896291039:web:93bc0a7608c3c32fd5116a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app