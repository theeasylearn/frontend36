var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    var url = request.url;
    console.log(url);
    var filename = url.substring(1); //india.html from /india.html
    fs.readFile(filename,function(error,content){
        if(error)
        {
            response.writeHead(404,{'content-type':'text/html'});
            response.write('no such page exists');
            return response.end();
        }
        else 
        {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write(content);
            return response.end();
        }
    })
});
server.listen(5000);
console.log('ready to accept reqeust....');