// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfkxaHNVRJVlBTRd20dgxKKewKGojhd18",
  authDomain: "imagi-2512.firebaseapp.com",
  projectId: "imagi-2512",
  storageBucket: "imagi-2512.appspot.com",
  messagingSenderId: "644279378906",
  appId: "1:644279378906:web:5b588ab308b445a28b56e3",
  measurementId: "G-H8VX0LPFPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const storage = getStorage(app);