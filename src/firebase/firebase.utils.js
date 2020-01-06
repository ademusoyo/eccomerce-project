import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDGHAKFjexPg5uQEHME1VI3JKPdcrJIFfM",
    authDomain: "eccomerce-db.firebaseapp.com",
    databaseURL: "https://eccomerce-db.firebaseio.com",
    projectId: "eccomerce-db",
    storageBucket: "eccomerce-db.appspot.com",
    messagingSenderId: "648885111911",
    appId: "1:648885111911:web:9866e0193d6fa2c38ad8c2"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;