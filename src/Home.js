import React from 'react';

import'bootstrap/dist/css/bootstrap.min.css';

import'bootstrap/dist/js/bootstrap.bundle.min';

import {
	BrowserRouter as Router,
	
	Link
} from 'react-router-dom';
import './index.css'

function Home(){
    return(
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
            <img className="navbar-brand " src="./code_logo.png" alt="" height='75px' width= '100px'/>
            <h2>CodePad : A Collaborative Code Editor </h2>
            <Link to='/login' className="btn-lg btn-dark btn">SignUp/LogIn</Link>
               
                  
                 </nav>
                  <video src="coding.mp4" muted loop autoPlay ></video>
        </div>
        
    );

}
export default Home;
