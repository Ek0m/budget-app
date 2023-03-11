// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFireStore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNAe4tH2FvtRe6RBdGUJHg84KSuPueLQQ",
  authDomain: "budgeto-71273.firebaseapp.com",
  projectId: "budgeto-71273",
  storageBucket: "budgeto-71273.appspot.com",
  messagingSenderId: "441808313627",
  appId: "1:441808313627:web:dc25459eff80b6d06c47be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFireStore(app)
export const auth = getAuth(app)

export const eventRef = collection(db, 'event')
export const expensesRef = collection(db, 'expenses')


export default app;