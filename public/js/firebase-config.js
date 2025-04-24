// Import Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDip0BbYYZY96HhnFb4VZBF4ixKeefS5Mc",
    authDomain: "sports-buddy-afa6c.firebaseapp.com",
    projectId: "sports-buddy-afa6c",
    storageBucket: "sports-buddy-afa6c.appspot.com",
    messagingSenderId: "592717645640",
    appId: "1:592717645640:web:5aa11ed8c953adead4957d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
