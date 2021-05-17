import firebase from 'firebase';

/*var firebaseConfig = {
    apiKey: "AIzaSyArYFLIoSiw9ErJ4dHP4e2rVNP153iLMIg",
    authDomain: "login-9848c.firebaseapp.com",
    projectId: "login-9848c",
    storageBucket: "login-9848c.appspot.com",
    messagingSenderId: "792447422559",
    appId: "1:792447422559:web:86351d39434c39b0bb0bea"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);*/
  const firebaseConfig = {
    apiKey: "AIzaSyAJCTM5kcg0JQ0eiqhw77r5sWKZJN-1Y58",
    authDomain: "codepad-project.firebaseapp.com",
    projectId: "codepad-project",
    storageBucket: "codepad-project.appspot.com",
    messagingSenderId: "498529966716",
    appId: "1:498529966716:web:d5b6f8221cc04baa6b87f9",
    measurementId: "G-54PT701JS7"
  };
  // Initialize Firebase

 var db = firebase.firestore();
  //firebase.analytics();
  

  export default db;
 