var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){
    var filename = request.url;
    console.log(filename);
    filename = filename.substring(1);
    fs.unlink(filename,function(error){
        if(error)
        {
            response.writeHead(500,{'content-type':'text/html'});
            response.write('file can not be deleted');
        }    
        else 
        {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write('file deleted successfully');
        }
        response.end();
    })
});

server.listen(5000);
console.log('ready to accept request');
