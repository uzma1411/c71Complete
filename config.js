import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAP0_rqAYUR6SQ6YC5KqzfI63sW-2TKONE",
    authDomain: "willy-27ce8.firebaseapp.com",
   
    projectId: "willy-27ce8",
    storageBucket: "willy-27ce8.appspot.com",
    messagingSenderId: "421218309758",
    appId: "1:421218309758:web:2de0d9982df593b12baa2f"
  };
  // Initialize Firebase
 
firebase.initializeApp(firebaseConfig);
  

export default firebase.firestore();