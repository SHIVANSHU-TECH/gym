import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDul8CEJaCzKSBe8XpRbkv15IRT83kRH_M',
  authDomain: 'form0-2fabb.firebaseapp.com',
  databaseURL: 'https://form0-2fabb-default-rtdb.firebaseio.com',
  projectId: 'form0-2fabb',
  storageBucket: 'form0-2fabb.appspot.com',
  messagingSenderId: '434362587728',
  appId: '1:434362587728:web:e76fd128a35893284d4f55',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
// }

export const firestore = firebase.firestore();
