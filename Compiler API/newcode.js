
import require from 'requirejs';
var request = require('request');

var program3 = {
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
});