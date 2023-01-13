// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getAuth }from "firebase/auth";
import{getFirestore}from "firebase/firestore";
import{getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBR8C0TW-OpD-PM67oVmAGDYutJJuxWZfA",
  authDomain: "ecommerce-82666.firebaseapp.com",
  projectId: "ecommerce-82666",
  storageBucket: "ecommerce-82666.appspot.com",
  messagingSenderId: "989519984982",
  appId: "1:989519984982:web:f7bb2c364c2d3f7699fef7",
  measurementId: "G-FEK03J5SEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
