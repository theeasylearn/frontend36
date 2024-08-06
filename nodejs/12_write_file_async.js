var http = require('http');
var fs = require('fs');
var url = require('url');
//call
//http://localhost:5000/story?name=thstry_crow&content=A%20thirsty%20crow%20flew%20all%20over%20the%20fields%20looking%20for%20water.%20For%20a%20long%20time%2C%20he%20could%20not%20find%20any.%20He%20felt%20very%20weak%2C%20almost%20giving%20up%20hope.%20Suddenly%2C%20he%20saw%20a%20water%20jug%20below%20the%20tree.%20He%20flew%20straight%20down%20to%20see%20if%20there%20was%20any%20water%20inside.%20The%20crow%20tried%20to%20push%20his%20head%20into%20the%20jug.%20Sadly%2C%20he%20found%20that%20the%20neck%20of%20the%20jug%20was%20too%20narrow.%20Then%20he%20tried%20to%20push%20the%20jug%20down%20for%20the%20water%20to%20flow%20out%2C%20but%20he%20found%20that%20the%20jug%20was%20too%20heavy.%20The%20crow%20thought%20hard%20for%20a%20while.%20Then%20looking%20around%20it%2C%20he%20saw%20some%20pebbles.%20He%20suddenly%20had%20a%20good%20idea.%20He%20started%20picking%20up%20the%20pebbles%20one%20by%20one%2C%20dropping%20each%20into%20the%20jug.%20As%20more%20and%20more%20pebbles%20filled%20the%20jug%2C%20the%20water%20level%20kept%20rising.%20Soon%20it%20was%20high%20enough%20for%20the%20crow%20to%20drink.%20His%20plan%20had%20worked%21

var server = http.createServer(function(request,response){
    var FileName = 'story.txt';
    var querystring = url.parse(request.url, true);
    var input = querystring.query;
    console.log(input.name,input.content);
});
server.listen(5000);
console.log('ready to accept reqeust....');