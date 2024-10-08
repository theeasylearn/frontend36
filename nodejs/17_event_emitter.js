var http = require('http');
var event = require('events');
var url = require('url');
var users = []; //this list is initially empty. it has list of userid of those user who has Sign in. whenever user tries to Sign in, we will check whether userid is available in users or not. if userid is not available in users list, we will add it otherwise we will not allow user to Sign in 

var em = new event.EventEmitter(); //have created object of EventEmitter class
//create function that handle event
var signin = function (userid,response) {
    
    let temp = users.filter(function (item) {
        return item == userid
    });
    if (temp.length >= 1) {
        response.write('you have already logged in other device. only 1 login is allowed');
    }
    else {
        users.push(userid);
        response.write('you have logged in successful');
    }
}
var signout = function (userid,response) {
    users = users.filter(function (item) {
        return item != userid
    });
    response.write('signout successfull');
}
//define event listners
em.on("login",signin);
em.on("logout",signout);

//Sign in 
//http://localhost:5000/signin?userid=1000
//sign out
//http://localhost:5000/signout?userid=1000

var server = http.createServer(function (request, response) {
    var querystring = url.parse(request.url, true);
    var input = querystring.query;
    var pathname = querystring.pathname;
    var userid = input.userid;
    response.writeHead(200, { 'content-type': 'text/html' });
    console.log(pathname);
    if (userid === undefined) {
        response.write('invalid sign in attampt');
    }
    else if (pathname !== '/signin' && pathname !== '/signout') {
        response.write('invalid url');
    }
    else 
    {
        if (pathname === '/signout') {
            //signout(userid,response);
            em.emit("logout",userid,response);
        }
        else 
        {
            // signin(userid,response);
            em.emit("login", userid, response);
        }
    }
    response.end();
});

server.listen(5000);
console.log('ready to accept request');
