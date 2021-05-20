import React from 'react';
import ReactDOM from 'react-dom';
import'bootstrap/dist/css/bootstrap.min.css';

import'bootstrap/dist/js/bootstrap.bundle.min';
import App2 from './components/App2';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './Home';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import App_auth from './components/App_auth';
ReactDOM.render(
  <Router>
       <Switch>
		      <Route exact path="/" component={Home}/>
				<Route exact path="/login" component={App_auth}/>
				<Route exact path="/App2" component={App2}/>
	    </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
