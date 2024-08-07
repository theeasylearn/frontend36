//example about how to return json response to browser
var http = require('http'); 
var bus_routes = [
    { from: 'bhavnagar', to: 'surat', busType: 'AC', departureTime: '08:00 AM' },
    { from: 'rajkot', to: 'baroda', busType: 'non AC', departureTime: '09:30 AM' },
    { from: 'ahmedabad', to: 'jamnagar', busType: 'AC', departureTime: '11:15 AM' },
    { from: 'baroda', to: 'bhavnagar', busType: 'non AC', departureTime: '01:00 PM' },
    { from: 'surat', to: 'rajkot', busType: 'AC', departureTime: '02:45 PM' },
    { from: 'jamnagar', to: 'ahmedabad', busType: 'non AC', departureTime: '04:30 PM' },
    { from: 'bhavnagar', to: 'rajkot', busType: 'AC', departureTime: '06:15 PM' },
    { from: 'surat', to: 'baroda', busType: 'non AC', departureTime: '07:45 PM' },
    { from: 'rajkot', to: 'jamnagar', busType: 'AC', departureTime: '09:30 PM' },
    { from: 'baroda', to: 'ahmedabad', busType: 'non AC', departureTime: '11:15 PM' },
    { from: 'ahmedabad', to: 'bhavnagar', busType: 'AC', departureTime: '01:00 AM' },
    { from: 'jamnagar', to: 'rajkot', busType: 'non AC', departureTime: '02:45 AM' },
    { from: 'baroda', to: 'surat', busType: 'AC', departureTime: '04:30 AM' },
    { from: 'bhavnagar', to: 'jamnagar', busType: 'non AC', departureTime: '06:15 AM' },
    { from: 'rajkot', to: 'ahmedabad', busType: 'AC', departureTime: '07:45 AM' },
    { from: 'ahmedabad', to: 'baroda', busType: 'non AC', departureTime: '09:30 AM' },
    { from: 'surat', to: 'bhavnagar', busType: 'AC', departureTime: '11:15 AM' },
    { from: 'jamnagar', to: 'rajkot', busType: 'non AC', departureTime: '01:00 PM' },
    { from: 'baroda', to: 'surat', busType: 'AC', departureTime: '02:45 PM' },
    { from: 'rajkot', to: 'bhavnagar', busType: 'non AC', departureTime: '04:30 PM' },
    { from: 'ahmedabad', to: 'surat', busType: 'AC', departureTime: '06:15 PM' },
    { from: 'baroda', to: 'rajkot', busType: 'non AC', departureTime: '07:45 PM' },
    { from: 'bhavnagar', to: 'baroda', busType: 'AC', departureTime: '09:30 PM' },
    { from: 'jamnagar', to: 'bhavnagar', busType: 'non AC', departureTime: '11:15 PM' },
    { from: 'surat', to: 'ahmedabad', busType: 'AC', departureTime: '01:00 AM' },
    { from: 'rajkot', to: 'baroda', busType: 'non AC', departureTime: '02:45 AM' },
    { from: 'bhavnagar', to: 'baroda', busType: 'AC', departureTime: '04:30 AM' },
    { from: 'jamnagar', to: 'rajkot', busType: 'non AC', departureTime: '06:15 AM' },
    { from: 'surat', to: 'bhavnagar', busType: 'AC', departureTime: '07:45 AM' },
    { from: 'baroda', to: 'rajkot', busType: 'non AC', departureTime: '09:30 AM' },
    { from: 'ahmedabad', to: 'surat', busType: 'AC', departureTime: '11:15 AM' },
    { from: 'rajkot', to: 'bhavnagar', busType: 'non AC', departureTime: '01:00 PM' },
    { from: 'baroda', to: 'jamnagar', busType: 'AC', departureTime: '02:45 PM' },
    { from: 'bhavnagar', to: 'surat', busType: 'non AC', departureTime: '04:30 PM' },
    { from: 'surat', to: 'rajkot', busType: 'AC', departureTime: '06:15 PM' },
]
//localhost:5000/routes
var server = http.createServer(function (request, response){
    var url = request.url; //request.url property has web page url for which server has received reqeust
    console.log(url);
    if(url == "/route")
    {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify(bus_routes));
    }
    else 
    {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.write('data not found');
    }
    response.end();
});
var portno = 5000;
server.listen(5000);
console.log('ready to accept request');