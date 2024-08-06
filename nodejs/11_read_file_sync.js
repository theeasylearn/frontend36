var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response){
    var url = request.url;
    console.log(url);
    var FileName = url.substring(1); //india.html from /india.html
    console.log(FileName);
    // //read file synchronosly 
    try 
    {
        var FileContent = fs.readFileSync(FileName);
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(FileContent);
    }
    catch(error)
    {
        //console.log(error);
        if(error.code === 'ENOENT')
        {
            //ENOENT (Error NO ENTry):
            //FILE OR DIRECTORY NOT FOUND
            response.writeHead(404, { 'content-type': 'text/html' });
            response.write('no such page exists');
        }
    }
    response.end(); 
});
server.listen(5000);
console.log('ready to accept reqeust....');