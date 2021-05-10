import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import Login from './components/Authentication/App_auth';
import Home from './Home';

import React from 'react';


function App(){
    return(
        <div className="page">
            
             <Router>
          <Home path="/" />
          <Login path="/Login" />
          
        </Router>
            
        </div>
             
              
            
       
             
       
    )
}
export default App;