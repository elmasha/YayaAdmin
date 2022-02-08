import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import firebaseConfig from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig)

var db = firebaseApp.firestore();
export default db