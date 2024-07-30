var http = require('http');
//import local module
var common = require('./common');
var pwd = require("./mypassword");
var country = require("./country");
var server = http.createServer(function(request,response){
    console.log(common.className);
    console.log(common.address);
    console.log(common.city);
    console.log(common.pincode);

    console.log("first otp " + pwd.getOTP());
    console.log("second otp " + pwd.getOTP());
    console.log("third otp " + pwd.getOTP());
    console.log("fourth otp " + pwd.getOTP());

    console.log("country name " + country.name);
    console.log("country capital " + country.capital);
    console.log("country code " + country.code);
    console.log("country currency " + country.currency);
});

server.listen(5000);
console.log('server is started...');