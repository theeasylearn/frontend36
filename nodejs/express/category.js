var express = require('express');
var connection = require('./connection');
var cors = require('cors');
const CATEGORY_ROUTE = "/category";

var app = express();

//required to access input submitted via post,put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());

//purpose : used to insert a new category 
//method : post
// url : http://localhost:5000/category
// input : title,photo (all required)

app.post(CATEGORY_ROUTE, function (request, response) {
    //object destructring 
    var { title, detail } = request.body;
    //check all inputs are given or not
    if (title === undefined || detail === undefined) {
        response.json([{ 'error': 'required input missing' }]);
    }
    else 
    {
        var photo = 'nophoto.jpg';
        var sql = `insert into category (title,photo,detail) values('${title}','${photo}','${detail}')`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
                console.log(error);
            }
            else {
                response.json([{ 'error': 'no' }, { 'message': 'category inserted' }]);
            }
        });
    }
});

//update
app.put(CATEGORY_ROUTE, function (request, response) {

});

//delete
app.delete(CATEGORY_ROUTE, function (request, response) {

});

//purpose : used to get all categories 
//method : get
// url : http://localhost:5000/category
// input : nothing
app.get(CATEGORY_ROUTE, function (request, response) {
    var sql = "select id,title,detail,photo from category order by id desc";
    connection.con.query(sql,function(error,result){
        if (error) {
            response.json([{ 'error': 'error occured' }]);
            console.log(error);
        }
        else 
        {
            response.json(result);
        }
    });
});

app.listen(5000);
console.log('ready to accept request');