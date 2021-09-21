import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyBEKq6bcxrb_E8FUQ_9E54OY5LKXocduik",
  authDomain: "groupciclying.firebaseapp.com",
  projectId: "groupciclying",
  storageBucket: "groupciclying.appspot.com",
  messagingSenderId: "472733815840",
  appId: "1:472733815840:web:ad07673c86755d3c4ed845",
  measurementId: "G-E0FN6928PJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;