var express = require('express');
var cors = require('cors');
var app = express();

// Middleware required to access input passed using post, put, delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());

const ROUTE = "/contact";
var contacts = [];
var contactid = 1;
//https://addons.mozilla.org/en-US/firefox/addon/rester/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search
//insert contact
// Endpo int: http://localhost:5000/contact
// Method: POST
//input (required)
//name mobile
app.post(ROUTE,function(request,response){
    let {name,mobile} = request.body; //object destructuring
    if(name === undefined  || mobile === undefined)
    {
        response.json([{ 'error': 'input is missing' }]);

    }
    else 
    {
        let data = {
            name: name,
            mobile: mobile,
            id: contactid
        };
        contactid++;
        contacts.push(data);
        response.json([{ 'error': 'no' }, { 'message': 'contact inserted' }]);
    }
   
});

//update contact
app.put(ROUTE,function (request, response) {

});
//delete contact
app.delete(ROUTE,function (request, response) {

});
//fetch all  contact
app.get(ROUTE, function (request, response) {
    response.json(contacts);
});

// //fetch single  contact
// app.get(ROUTE, function (request, response) {

// });
app.listen(5000);
console.log('ready to accept request');