import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIS3zinKS0mEzR-T6Fa1TlzL9xajFztRM",
  authDomain: "react-admin-firebase-auth-crud.firebaseapp.com",
  projectId: "react-admin-firebase-auth-crud",
  storageBucket: "react-admin-firebase-auth-crud.appspot.com",
  messagingSenderId: "444984135208",
  appId: "1:444984135208:web:2a48b90cf7dd7dbc85ef1d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);