import axios from 'axios';
var datas = JSON.stringify({
           "code":`public class program{
                    public static void main(String [] args){
                        System.out.println(5+5+6);
                      }
                    }`,
           "language":"java",
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