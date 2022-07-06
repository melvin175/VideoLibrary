import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjU4-2bNYc6en0JOV9vkY9Ci0x6KonAXA",
  authDomain: "watchout-ae4c3.firebaseapp.com",
  projectId: "watchout-ae4c3",
  storageBucket: "watchout-ae4c3.appspot.com",
  messagingSenderId: "928214516581",
  appId: "1:928214516581:web:c26cdbc42991acf95b178c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
