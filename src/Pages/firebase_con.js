import * as firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDB99uxinZnElIxblOkuz_F17RvssWaJBE",
  authDomain: "contacts-fb0f6.firebaseapp.com",
  projectId: "contacts-fb0f6",
  storageBucket: "contacts-fb0f6.appspot.com",
  messagingSenderId: "94142059039",
  appId: "1:94142059039:web:24f89c9905a739510ebb2a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
