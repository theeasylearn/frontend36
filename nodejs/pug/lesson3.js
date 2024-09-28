var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','project');

// home about us service product contact
app.get("/",function(request,response){
    // response.render('home');
});
app.get("/aboutus",function(request,response){
    // response.render('home');
});
app.get("/service",function(request,response){
    // response.render('home');
});
app.get("/product",function(request,response){
    // response.render('home');
});
app.get("/contactus",function(request,response){
    // response.render('home');
});

app.listen(5000);
console.log('ready to accept request.');