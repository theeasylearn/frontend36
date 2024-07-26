var http = require('http');
//create server
var server = http.createServer(function(request,response){
    console.log('I have received request ');
});
//define portno 
var portno = 5000;
server.listen(portno);
console.log('ready to accept request on ' + portno);