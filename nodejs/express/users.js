var express = require('express');
var connection = require('./connection');
var cors = require('cors');
var pwd = require('./password_hash');
const USER_ROUTE = "/users";
var app = express();

//required to access input submitted via post,put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());

//purpose : used to register new user
//method : post
// url : http://localhost:5000/users/register
// input : email,mobile,password (all required)
app.post(USER_ROUTE + "/register", function (request, response) {


    var { email, password, mobile } = request.body;
    if (email === undefined || password === undefined || mobile === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        pwd.HashPassword(password).then((hash) => {
            let data = [email, hash, mobile];
            var sql = "insert into users (email,password,mobile) values (?,?,?)";
            //? means placeholders (now create an array which 3  value)
            connection.con.query(sql, data, function (error, result) {
                if (error) {
                    if (error.code === 'ER_DUP_ENTRY')
                        response.json([{ 'error': 'Email/Mobile is already registered with us' }])
                    else
                        response.json([{ 'error': 'error occured' }])
                    console.log(error);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'message': 'register sucessfully' }]);
                }
            });
        })
    }
});
//purpose : used to login as user
//method : post
// url : http://localhost:5000/users/login
// input : email,password (all required)
app.post(USER_ROUTE + "/login", function (request, response) {
    var { email, password } = request.body;
    if (email === undefined || password === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        
    }
});

app.listen(5000);
console.log('ready to accept request');