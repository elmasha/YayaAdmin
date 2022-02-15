import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import firebaseConfig from "./firebaseConfig"

firebase.initializeApp(firebaseConfig)

const db_real = firebase.database();
export default db_real