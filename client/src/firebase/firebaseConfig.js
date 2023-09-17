import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuAbF4qnB43g6cyG2Aonv--OI6v7aX8jc",
  authDomain: "fir-login-with-firebase-2a40f.firebaseapp.com",
  projectId: "fir-login-with-firebase-2a40f",
  storageBucket: "fir-login-with-firebase-2a40f.appspot.com",
  messagingSenderId: "259400100690",
  appId: "1:259400100690:web:7ed011cb9f07b1344a288b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
