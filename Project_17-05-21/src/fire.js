import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJCTM5kcg0JQ0eiqhw77r5sWKZJN-1Y58",
  authDomain: "codepad-project.firebaseapp.com",
  projectId: "codepad-project",
  storageBucket: "codepad-project.appspot.com",
  messagingSenderId: "498529966716",
  appId: "1:498529966716:web:d5b6f8221cc04baa6b87f9",
  measurementId: "G-54PT701JS7"
};
  const fire = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export default fire;