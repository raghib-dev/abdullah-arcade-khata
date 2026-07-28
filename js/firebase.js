// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmn1WyCizlSTTVqmd25I4BKAmrxRlArSE",
  authDomain: "abdullah-arcade-khata.firebaseapp.com",
  projectId: "abdullah-arcade-khata",
  storageBucket: "abdullah-arcade-khata.firebasestorage.app",
  messagingSenderId: "66620380204",
  appId: "1:66620380204:web:95966bdd12a0ba46baed89"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();

export { signInWithPopup, signOut };