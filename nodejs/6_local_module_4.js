var http = require('http');
//import local module
var m = require("./mymail");
var server = http.createServer(function(request,response){
    //create object of MyMail class

    let Mail = new m.MyMail('theeasylearn@gmail.com','first email','this is my first email to you, how are you');

    Mail.send();
});

server.listen(5000);
console.log('server is started...');