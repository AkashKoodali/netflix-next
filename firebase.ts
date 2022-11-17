// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9B2yRPbuv-J7CINDxqBZS67Fdso8EDSw",
  authDomain: "netflix-next-7c857.firebaseapp.com",
  projectId: "netflix-next-7c857",
  storageBucket: "netflix-next-7c857.appspot.com",
  messagingSenderId: "308813864461",
  appId: "1:308813864461:web:8c4cd1eea8be598ae97f44"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export { auth, db }