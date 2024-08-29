// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1GFGkLrihAVHK3E7I1LkOuAHnGv4-GU",
  authDomain: "my-netflix-24905.firebaseapp.com",
  projectId: "my-netflix-24905",
  storageBucket: "my-netflix-24905.appspot.com",
  messagingSenderId: "685954095801",
  appId: "1:685954095801:web:21e5a17ecadfe405291968",
  measurementId: "G-6ZVRLX9H00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();