import React, { useState, useEffect } from 'react';
import fire from "./fire";
import Login from './Login';
import db from './firedb';
import CodeIDE from './CodeIDE';
import './App_auth.css';
//import'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import Popper from 'popper.js';
//import'bootstrap/dist/js/bootstrap.bundle.min';
const App_auth = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }  

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            default : break;
        }

      });
  };

  const handleSignup = () => {
    
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
            case "auth/email-already-in-use":
            case "auth/Invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default : break;
        }
      });  
      db.collection("users").doc(email).set({
        emailID: email,
        password:password,
        
        
    })
  };
  /*  .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    }); 
  };*/

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect (() => {
    authListener();
  });
  const handleaddcodeparent=(fname,code) =>
  {

  //console.log(email);
  db.collection("users").doc(email).collection("Programs").doc(fname).set({
    Filename: fname ,
    Code: code.toString(),
  });
}

  return (
    <div className= "App">
      {user ? (
        
          <CodeIDE handleLogout={handleLogout} handleaddcodeparent={handleaddcodeparent}/>
      ) : (
          <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
      />
      )}    
    </div>
  );
};
export default App_auth;
