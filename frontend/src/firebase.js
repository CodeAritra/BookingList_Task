import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO10Gpr_4a2xUrCTRzodmx-39UV9iZA1s",
  authDomain: "aritra-3699b.firebaseapp.com",
  projectId: "aritra-3699b",
  storageBucket: "aritra-3699b.firebasestorage.app",
  messagingSenderId: "658001118101",
  appId: "1:658001118101:web:b3e2c040f143c8a5b0ac9c",
  measurementId: "G-2NQ0YKNT5K",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
