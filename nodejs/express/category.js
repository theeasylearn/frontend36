var express = require('express');
var connection = require('./connection');
const CATEGORY_ROUTE = "/category";

var app = express();

//insert 
app.post(CATEGORY_ROUTE,function(request,response){
    var sql = "insert into category (title,photo,detail) values('IPhone 15','iphone15.jpg','its apple phone')";
    connection.con.query(sql,function(error,result){
        if(error)
        {
            response.json([{'error':'error occured'}]);
            console.log(error);
        }
        else 
        {
            response.json([{'error':'no'},{'message':'category inserted'}]);
        }
    });
});

//update
app.put(CATEGORY_ROUTE,function(request,response){

});

//delete
app.delete(CATEGORY_ROUTE,function(request,response){

});

//select
app.get(CATEGORY_ROUTE,function(request,response){

});

app.listen(5000);
console.log('ready to accept request');