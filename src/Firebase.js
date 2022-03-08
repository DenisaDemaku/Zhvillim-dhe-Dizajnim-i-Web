import firebase from 'firebase';
import store from './store';
const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBzIXBO7ShykU-VYmP-ZV2eYV94s-mcvMA",
    authDomain: "medicalproducts-2584e.firebaseapp.com",
    databaseURL: "https://medicalproducts-2584e-default-rtdb.firebaseio.com",
    projectId: "medicalproducts-2584e",
    storageBucket: "medicalproducts-2584e.appspot.com",
    messagingSenderId: "112230325782",
    appId: "1:112230325782:web:ad9ceb780ccf8bfc891f37",
    measurementId: "G-EZ0XTKF9B5"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);

firebase.auth().onAuthStateChanged(user=>{
    store.dispatch("fetchUser", user);
});

firebase.getCurrentUser  = () => {
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export default firebase;
