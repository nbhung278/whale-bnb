// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBPXELCEAclu8K6IQ6bPj-2SIdpjcsJh7k',
  authDomain: 'whale-bnb.firebaseapp.com',
  projectId: 'whale-bnb',
  storageBucket: 'whale-bnb.appspot.com',
  messagingSenderId: '188180035391',
  appId: '1:188180035391:web:116dd8967ed3bbdcfb058a',
  measurementId: 'G-GNMTHMTMK1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export const storage = getStorage(app)
