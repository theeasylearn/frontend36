var http = require('http'); //built in module
var x = require('./mydatetime'); //import local modules
function handleRequest(request,response)
{
    let today = x.getDate();
    let now = x.getTime();
    console.log(today);
    console.log(now);
}

var server = http.createServer((request,response) => handleRequest(request,response));
var portno = 5000;
server.listen(5000);
console.log('ready to accept request on portno = ',portno);
