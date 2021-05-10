import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyArYFLIoSiw9ErJ4dHP4e2rVNP153iLMIg",
    authDomain: "login-9848c.firebaseapp.com",
    projectId: "login-9848c",
    storageBucket: "login-9848c.appspot.com",
    messagingSenderId: "792447422559",
    appId: "1:792447422559:web:86351d39434c39b0bb0bea"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;