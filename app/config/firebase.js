// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBStxEVP7U1r5DzLVE6jg1qURJ1VeYlOxw",
    authDomain: "eeshop-4347d.firebaseapp.com",
    databaseURL: "https://eeshop-4347d-default-rtdb.firebaseio.com",
    projectId: "eeshop-4347d",
    storageBucket: "eeshop-4347d.appspot.com",
    messagingSenderId: "162551049670",
    appId: "1:162551049670:web:dfbf4804c7ab7d35b056c7",
    measurementId: "G-QB3C05M9XG"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase


export { firebase };