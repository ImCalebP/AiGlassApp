import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyCEndAvwJXHEGMfsuli3uBByzJV--hmJ9g",
    authDomain: "ai-glass.firebaseapp.com",
    projectId: "ai-glass",
    storageBucket: "ai-glass.appspot.com",
    messagingSenderId: "288383026522",
    appId: "1:288383026522:web:c9c353a70cd766ca5adf63",
    measurementId: "G-7DF8GYYKMB"
};

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_ASYNC = initializeAuth(auth);