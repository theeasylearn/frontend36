//import http module
var http = require('http');
//import local module
var money = require('./my_currency_converter');

//create server 
var server = http.createServer(function(request,response){
    var dollar = money.toDolar(100);
    var yen = money.toYen(100);
    var pound = money.toPound(100);

    console.log("Dollar = " + dollar);
    console.log("Yen = " + yen);
    console.log("Pound = " + pound);
    
});

var portno = 5000;
server.listen(portno);
console.log('ready to accept request....');
