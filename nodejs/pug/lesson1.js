var express = require('express');
var app = express();
app.set('view engine','pug');
app.set('views','views');

app.get("/one",function(request,response){
    response.render('one');
});

app.get("/two",function(request,response){
    response.render('two');
});

app.get("/third",function(request,response){
    response.render('third');
});
app.listen(5000);
console.log('ready to accept request.');