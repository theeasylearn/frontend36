var express = require('express');
var path = require('path');
var app = express();
app.set('view engine','pug');
app.set('views','views');
//set path using middleware 
app.use(express.static(path.join(__dirname,'public')))
// home about us service product contact
app.get("/",function(request,response){
    response.render('home');
});
app.get("/aboutus",function(request,response){
    response.render('aboutus');
});
app.get("/service",function(request,response){
    response.render('services');
});

app.get("/contactus",function(request,response){
    response.render('contactus');
});

app.listen(5000);
console.log('ready to accept request.');