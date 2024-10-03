var express = require('express');
var connection = require('./connection');
var cors = require('cors');

var path = require('path');
var app = express();

//required to access input submitted via post,put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());

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

app.post("/insert-contact",function(request,response){
    //name,email,subject,phone,message
    let {name,email,subject,phone,message} = request.body;
    console.log(request.body);
    if(name === undefined || email === undefined || subject === undefined || phone === undefined || message === undefined)
    {
        response.render('contactus',{
            message:'required input are missing'
        });    
    }    
    else 
    {
        let sql = `insert into contact (name,email,contactno,message) values ('${name}','${email}','${phone}','${message}')`;
        connection.con.query(sql,function(error,result){
            if(error)
            {
                console.log(error);
                response.render('contactus',{
                    message:'oops, something went wrong, please try after sometime'
                });
            }    
            else 
            {
                //
                response.render('contactus',{
                    message:'Thanks for contacting us, we will get back you to soon'
                });
            }
        });
    }
    
});

app.listen(5000);
console.log('ready to accept request.');