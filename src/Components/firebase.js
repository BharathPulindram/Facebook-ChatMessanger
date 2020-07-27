import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNwvt8DrOE_0FAwBSklr40oWCGARG6I9Y",
    authDomain: "facebook-bharath.firebaseapp.com",
    databaseURL: "https://facebook-bharath.firebaseio.com",
    projectId: "facebook-bharath",
    storageBucket: "facebook-bharath.appspot.com",
    messagingSenderId: "340446501939",
    appId: "1:340446501939:web:6901df1b1c56230f515746",
    measurementId: "G-ZZ8TEBPJF8"

});

const db = firebaseApp.firestore();

export default db;