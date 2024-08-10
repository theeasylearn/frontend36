var http = require('http');
var fs = require('fs');
var url = require('url')
//http:localhost:5000/rename?current=apple.txt&newfile=banana.txt
var server = http.createServer(function (request, response) {
    var querystring = url.parse(request.url, true);
    var input = querystring.query;
    var { current, newfile } = input;
    if (current === undefined || newfile === undefined) {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write('input is missing');
    }
    else {
        fs.rename(current, newfile, function (error) {
            if (error) {
                response.writeHead(500, { 'content-type': 'text/html' });
                response.write('file can not be renamed');
            }
            else {
                response.writeHead(200, { 'content-type': 'text/html' });
                response.write('file renamed successfully');
            }
            response.end();
        })
    }

});

server.listen(5000);
console.log('ready to accept request');
