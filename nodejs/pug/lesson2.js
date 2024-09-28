var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','views');

app.get("/sample",function(request,response){
    response.render('sample');
});

app.get("/vision",function(request,response){
    response.render('vision');
});
app.listen(5000);
console.log('ready to accept request.');