// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApA4K90CUbP0_-nVFoykcYjiuUpLTHuKI",
  authDomain: "fir-a0443.firebaseapp.com",
  databaseURL: "https://fir-a0443-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fir-a0443",
  storageBucket: "fir-a0443.appspot.com",
  messagingSenderId: "275624763707",
  appId: "1:275624763707:web:67a9d272fb1ecbeff4571e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };