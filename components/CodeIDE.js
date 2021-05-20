//copy content of app.js here
 //import Header from './components/Header'
 import Sidebar from './Sidebar'
 //import Editor from './components/Editor'
 import Form from './Form'
 //import Form from './components/Form'
import './App_auth.css';
 //import Ipop from './components/Ipop'
 import Button from './Button';
import { useState } from 'react';
import db from './firedb';

// Required for side-effects
require("firebase/firestore");
const firebase = require("firebase");

const CodeIDE = ({handleLogout,handleaddcodeparent,email}) =>{
  const [code,setCode] = useState('');
  /*const email1=email;
  console.log(email1);*/
  const handlegetCode = (code) =>{
   setCode(code);
  }
  const handleaddcode =(fname) =>{
    handleaddcodeparent(fname,code);
   
  }
   return (
    <div className="container ">
        <button onClick={handleLogout}>Logout</button>
      <div className="row my-row">
        <div className="col-md-3 my-col ">
              <img className="class-rounded" id="user-img " src="./code_logo.png" alt="" height='95px' width= '95px'/>
              <Sidebar addcode={handleaddcode} email={email}/>
             
        </div>

        <div className="col-md-8 my-col ">
             <Form getCode={handlegetCode}/>
        </div>

      </div>
    </div>
    
  );
}
export default CodeIDE;
