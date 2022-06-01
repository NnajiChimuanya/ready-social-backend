import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTeuwQrF2bvdThzB5oYnWkJ9LAqtBVMvo",
  authDomain: "ready-social-backend.firebaseapp.com",
  projectId: "ready-social-backend",
  storageBucket: "ready-social-backend.appspot.com",
  messagingSenderId: "989248509550",
  appId: "1:989248509550:web:446d203b92a801d4d0387f",
  measurementId: "G-TFNBG882LT"
};


export const firebase = initializeApp(firebaseConfig);
