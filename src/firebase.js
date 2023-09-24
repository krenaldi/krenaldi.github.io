// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNtjDRxHkm16F3tFDVXvEt5ndjhkNAEY4',
  authDomain: 'react-potrfolio-dashboard.firebaseapp.com',
  projectId: 'react-potrfolio-dashboard',
  storageBucket: 'react-potrfolio-dashboard.appspot.com',
  messagingSenderId: '47382988219',
  appId: '1:47382988219:web:76b81aff8b421be839f09e',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};
