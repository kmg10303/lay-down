// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkDgvD6pcQ1ZdjwUCT8IkuO_awprvBlhI",
  authDomain: "lay-down-31db9.firebaseapp.com",
  projectId: "lay-down-31db9",
  storageBucket: "lay-down-31db9.appspot.com",
  messagingSenderId: "262888697239",
  appId: "1:262888697239:web:4a2075bdcfb25ea81aa8d2",
  measurementId: "G-4GZ2T96M8T"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let analytics; let firestore;
if (firebaseConfig?.projectId) {
// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (app.name && typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Access Firebase services using shorthand notation
firestore = getFirestore();
}


export function recieveData(user) {
  db.collection('users').doc(user).set({foo:'bar'}, {merge: true});
}