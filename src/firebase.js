import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyD6bpqIq3oMdwDHyPUzVTbPnXy1spHd4Sk",
  authDomain: "spectre-312808.firebaseapp.com",
  databaseURL: "https://spectre-312808-default-rtdb.firebaseio.com",
  projectId: "spectre-312808",
  storageBucket: "spectre-312808.appspot.com",
  messagingSenderId: "753508949887",
  appId: "1:753508949887:web:39ec8c27b2a24d076c844a",
  measurementId: "G-MPHHKBK013"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
