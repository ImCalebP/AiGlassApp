import firebase from 'firebase/compat/app' ;
import 'firebase/compat/auth ' ;
import ' firebase/compat/firestore '

const firebaseConfig = {
    apiKey: "AIzaSyCEndAvwJXHEGMfsuli3uBByzJV--hmJ9g",
    authDomain: "ai-glass.firebaseapp.com",
    projectId: "ai-glass",
    storageBucket: "ai-glass.appspot.com",
    messagingSenderId: "288383026522",
    appId: "1:288383026522:web:c9c353a70cd766ca5adf63",
    measurementId: "G-7DF8GYYKMB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase};