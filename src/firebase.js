
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFKuzhMrXQbxvSRR5NfFSxUKyc-LouISQ",
  authDomain: "netflix-clone-build-40ada.firebaseapp.com",
  projectId: "netflix-clone-build-40ada",
  storageBucket: "netflix-clone-build-40ada.appspot.com",
  messagingSenderId: "175263674938",
  appId: "1:175263674938:web:d8909ddbcbae9c19c83b03"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };


