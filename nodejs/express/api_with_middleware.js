//in this we will put all routes 
var express = require('express');
var cors = require('cors');
var category = require('./category');
var user = require('./users');
const { con } = require('./connection');

const USER_ROUTE = "/users";
const CATEGORY_ROUTE = "/category";
var app = express();
//required to access input submitted via post,put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());

//create middleware 
app.use(function(request,response,next){
    //access log middleware
    console.log('first middleware');
    next();

});

app.use(function(request,response,next){
    //access control middleware
    console.log('second middleware');
    console.log('request url %s request method %s',request.url,request.method);
    //create data class object
    let now = new Date();
    let currentHour = now.getHours(); //return hours in 24 hour format
    if(currentHour<8 || currentHour>17)
    {
        response.json([{error:'no'},{message:'we do process request before 10 am and after 5 PM'}]);
    }    
    else 
    {
        next();
    }     
});


//purpose : used to insert a new category 
//method : post
// url : http://localhost:5000/category
// input : title,photo (all required)
app.post(CATEGORY_ROUTE,(request,response) => category.insert(request,response));

//update
//purpose : used to update category 
//method : put
// url : http://localhost:5000/category
// input : id,title,photo,detail (required)
app.put(CATEGORY_ROUTE,(request,response) => category.update(request,response));

//delete
//purpose : used to delete category 
//method : delete
// url : http://localhost:5000/category
// input : id
app.delete(CATEGORY_ROUTE,(request,response) => category.delete(request,response));

//purpose : used to get all categories 
//method : get
// url : http://localhost:5000/category
// input : nothing
app.get(CATEGORY_ROUTE,(request,response) => category.select(request,response));

app.post(USER_ROUTE + "/register", (request, response) => user.register(request, response));
app.post(USER_ROUTE + "/login", (request, response) => user.login(request, response));
app.post(USER_ROUTE + "/change-password", (request, response) => user.changePassword(request, response));
app.post(USER_ROUTE + "/forgot-password", (request, response) => user.forgotPassword(request, response));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


