import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyDHvnTIY1x17KWrHuszJmJyvQCbNilC4Uk",
        authDomain: "yayananies.firebaseapp.com",
        projectId: "yayananies",
        storageBucket: "yayananies.appspot.com",
        messagingSenderId: "934333898387",
        appId: "1:934333898387:web:415ae3b8c0585bd271b766",
        measurementId: "G-676Y2E1CSE"
    }).firestore()


// if using Firebase JS SDK < 5.8.0
export default db;