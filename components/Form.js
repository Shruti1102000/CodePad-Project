import React from 'react';
import './App_auth.css';
//import require from 'requirejs/require';
import axios from 'axios';
//import axios from 'axios';
/*axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';*/
import'bootstrap/dist/css/bootstrap.min.css';

import'bootstrap/dist/js/bootstrap.bundle.min';
//var request = require('request');
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      lang:'select',
      ip:'',
      out:''
    };
   

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({code: event.target.value});
    this.props.getCode(this.state.code);
  }

  handleChange1(event) {
    this.setState({ip: event.target.value});
  }

  handleChange2(event) {
    this.setState({lang: event.target.value});
  }
  
  handleSubmit(event) {
    // alert(' ' + this.state.code);
    event.preventDefault();
   /* var program3 = {
      script : this.state.code,
      language: this.state.lang,
      versionIndex: "2",
      clientId: "45a99b585f22521252a91283546bef99",
      clientSecret:"91024e0ca243acbc92d756c2149170c31f9111a6148e4a0b137e872d33ca4a2a"
  };
  
  request({
      url: 'https://api.jdoodle.com/v1/execute',
      method: "POST",
      json: program3
  },
  function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
  });*/
    /*var datas = JSON.stringify({
        "code": this.state.code,
        "language":this.state.lang,
        "input":this.state.ip
        });

    var config = {
            method: 'post',
                url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
            headers: { 
                        'Content-Type': 'application/json'
                    },
            data : datas 
        };

        
  axios(config)
 .then(function (response) {
    this.setState({out : response.data.output} );
    })
.catch(function (error) {
console.log(error);
});
    alert(' ' + this.state.code);
   alert(' ' + this.state.lang);
   alert(' ' + this.state.out);*/
   var datas = JSON.stringify({
    "code":`#include<bits/stdc++.h>
    using namespace std;
    int main(){
      cout<<4<<endl;
      return 0;
    }`,
    "language":"cpp",
    "input":""
    });

var config = {
method: 'post',
url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
headers: { 
'Content-Type': 'application/json'

},
data : datas
};

axios(config)
.then(function (response) {
console.log(response.data.output);
})
.catch(function (error) {
console.log(error);
});

    
  }

  render() {
    return (
      <form  className="form" >
        <div className="row">

          <div className="col">
            

            
                  <select value={this.state.lang} onChange={this.handleChange2} className="dpdown">
                    <option value="select">Select a Language</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="cs">C#</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                    <option value="rb">Ruby</option>
                    <option value="kt">Kotlin</option>
                    <option value="swift">Swift</option>
                  </select>
       
                  <textarea placeholder="Write a code.." value={this.state.code} onChange={this.handleChange} className="form-control" rows="23"/>
                  <input type="submit" value="Run" onClick={this.handleSubmit} className="btn1" />
          </div>          
          
    
          <div className="col my-fcol">
    
                  <textarea placeholder="Enter Input" value={this.state.ip} onChange={this.handleChange1} className="form-control" rows="12" cols="69"/>
                  <textarea placeholder="Output" readOnly="false" value={this.state.out} className="form-control" rows="12" cols="69"/>
               
          </div>
                
        </div>
                
      </form>
    );
  }
}

export default Form
