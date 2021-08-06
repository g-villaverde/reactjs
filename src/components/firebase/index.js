import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = ({
    apiKey: "AIzaSyB5_VnHooYtAeIT58TD_yODcdr7pJ7HGeQ",
    authDomain: "ecommerce-estore.firebaseapp.com",
    projectId: "ecommerce-estore",
    storageBucket: "ecommerce-estore.appspot.com",
    messagingSenderId: "832522748532",
    appId: "1:832522748532:web:2557af2ac37ac88ff04721"
});

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const itemsCollection = firebase.firestore(app).collection("items");
export const db = app.firestore();

