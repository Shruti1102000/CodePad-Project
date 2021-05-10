import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Authentication/App_auth';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
handleAuth = () => (
   {Login}
)

function Home(){
    return(
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
            <img className="navbar-brand " src="./code_logo.png" alt="" height='75px' width= '100px'/>
            <h2>CodePad : A Collaborative Code Editor </h2>
            
                
                  <Link className="btn btn-dark btn-lg" to="/Login" onClick={handleAuth}>Login/SignUp</Link>
                  
                          
                         
                      
                  
                 </nav>
                  <video src="coding.mp4" muted loop autoPlay ></video>
        </div>
        
    )

}
export default Home;
