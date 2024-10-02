var express = require('express');
var connection = require('./connection');

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
    //fetch data from database (service)
    var sql = "select * from services order by id";
    connection.con.query(sql,function(error,result){
        if (error) 
        {
            response.render('services');
            console.log(error);
        }
        else 
        {
            response.render('services',{
                table:result
            });
        }
    });
});

app.get("/contactus",function(request,response){
    response.render('contactus');
});

app.listen(5000);
console.log('ready to accept request.');