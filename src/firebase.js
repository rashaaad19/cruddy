// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS0QHcLRMDXrJmI9-tl9sVg4JAswOlczw",
  authDomain: "crud-system-891aa.firebaseapp.com",
  projectId: "crud-system-891aa",
  storageBucket: "crud-system-891aa.appspot.com",
  messagingSenderId: "321106046087",
  appId: "1:321106046087:web:4305dc11076b170f11dc22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service and export it
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence);
