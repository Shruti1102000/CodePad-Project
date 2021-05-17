import axios from 'axios';
var output;
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
  /*headers: { 
    'Content-Type': 'application/json'

  },*/
  data : datas
};

axios(config)
.then(function (response) {
  console.log(response.data.output);
})
.catch(function (error) {
  console.log(error);
});
