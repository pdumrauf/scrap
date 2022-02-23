// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzFIgUre_zxdd4nEyHZX2Mgu0NWnji1DE",
  authDomain: "scrap-9452c.firebaseapp.com",
  projectId: "scrap-9452c",
  storageBucket: "scrap-9452c.appspot.com",
  messagingSenderId: "485079218334",
  appId: "1:485079218334:web:f1e70f68cefce3deea238f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);