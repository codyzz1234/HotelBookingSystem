import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const app = initializeApp({
    apiKey: "AIzaSyBiMcQrTtRyHwRDKq_4JSLHcy_XVwxozo8",
    authDomain: "reactproject-dev-c7c41.firebaseapp.com",
    databaseURL: "https://reactproject-dev-c7c41-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "reactproject-dev-c7c41",
    storageBucket: "reactproject-dev-c7c41.appspot.com",
    messagingSenderId: "947608581659",
    appId: "1:947608581659:web:fc55afa667d342db746abe",
    measurementId: "G-4TPRHKQ9H4"
})

export const auth = getAuth(app);
export const methods = {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}
export const db = getFirestore(app);
export default app