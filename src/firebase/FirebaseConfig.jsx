// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDLEMYNgVgDbKkQiL2T3JZiKAyohH8XPk",
  authDomain: "mysecondapp-c8039.firebaseapp.com",
  projectId: "mysecondapp-c8039",
  storageBucket: "mysecondapp-c8039.appspot.com",
  messagingSenderId: "1025377401795",
  appId: "1:1025377401795:web:586ff3ff592d52325b9b76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { fireDB, auth,storage };
