// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXTSh_td6vCyTYjwpmxVn_XS_6w5xeNdI",
  authDomain: "netflix-clone-yt-eb30c.firebaseapp.com",
  projectId: "netflix-clone-yt-eb30c",
  storageBucket: "netflix-clone-yt-eb30c.appspot.com",
  messagingSenderId: "834786001475",
  appId: "1:834786001475:web:7466b81b097b2c9703caf6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export { auth, db }