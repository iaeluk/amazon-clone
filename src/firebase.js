import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrgNX1MVq040pgW8J1D0nMRL57h9XBFkc",
  authDomain: "clone-ab3f2.firebaseapp.com",
  projectId: "clone-ab3f2",
  storageBucket: "clone-ab3f2.appspot.com",
  messagingSenderId: "4137544299",
  appId: "1:4137544299:web:fd51c4a26d84c3fa2adf2e",
  measurementId: "G-KFB8C670VQ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }