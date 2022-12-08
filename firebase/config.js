import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhbzIgQy50fAvPimgbEMTvuh3swe_Zydc',
  authDomain: 'resources-671dc.firebaseapp.com',
  projectId: 'resources-671dc',
  storageBucket: 'resources-671dc.appspot.com',
  messagingSenderId: '28853304139',
  appId: '1:28853304139:web:0444aefa2e640d7ce046ce',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };

// Tried https://firebase.google.com/docs/auth/web/custom-dependencies to reduce dependencies, but throws error
