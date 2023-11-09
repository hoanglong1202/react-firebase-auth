// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyDSQ8Dv7F3KD4Qt_ztBg_B04w7aeK9oK3c",
  authDomain: "nest-user-management-e0ffe.firebaseapp.com",
  projectId: "nest-user-management-e0ffe",
  storageBucket: "nest-user-management-e0ffe.appspot.com",
  messagingSenderId: "348576913709",
  appId: "1:348576913709:web:a2d2234806a521c8eadba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);