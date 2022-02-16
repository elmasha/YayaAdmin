// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHvnTIY1x17KWrHuszJmJyvQCbNilC4Uk",
    authDomain: "yayananies.firebaseapp.com",
    projectId: "yayananies",
    storageBucket: "yayananies.appspot.com",
    messagingSenderId: "934333898387",
    appId: "1:934333898387:web:415ae3b8c0585bd271b766",
    measurementId: "G-676Y2E1CSE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();