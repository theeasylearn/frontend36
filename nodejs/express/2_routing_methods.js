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
// Endpoint: http://localhost:5000/contact
// Method: POST
//input (required)
//name mobile
app.post(ROUTE, function (request, response) {
    let { name, mobile } = request.body; //object destructuring
    if (name === undefined || mobile === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
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
// Endpoint: http://localhost:5000/contact
// Method: PUT
//input (required)
//name mobile, id

app.put(ROUTE, function (request, response) {
    // [{ "name": "xyz", "mobile": "234", "id": 1 }, { "name": "abc", "mobile": "123", "id": 2 }]
    let { name, mobile, id } = request.body;
    if (name === undefined || mobile === undefined || id === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        let isFound = false;
        contacts = contacts.filter((item) => {
            if (item.id == id) {
                item.name = name;
                item.mobile = mobile;
                isFound = true;
            }
            return item;
        });
        if (isFound == false)
            response.json([{ 'error': 'contact not found' }]);
        else
            response.json([{ 'error': 'no' }, { 'message': 'contact updated' }]);
    }

});
//delete contact
// Endpoint: http://localhost:5000/contact
// Method: DELETE
//input (required)
//id

app.delete(ROUTE, function (request, response) {
    let {id} = request.body;
    let isFound = false;
    if (id === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        contacts = contacts.filter((item) => {
            if (item.id != id) {
                isFound = true;
                return item;
            }
        });
        if (isFound == false)
            response.json([{ 'error': 'contact not found' }]);
        else
            response.json([{ 'error': 'no' }, { 'message': 'contact deleted' }]);
    }
});
//fetch all  contact

//response
//[{"error":"no"},{"total":2},{"name":"xyz","mobile":"234","id":1},{"name":"abc","mobile":"123","id":2}]
app.get(ROUTE, function (request, response) {
    let temp = [...contacts];
    temp.unshift({ 'total': contacts.length });
    temp.unshift({ 'error': 'no' });
    response.json(temp);
});

// //fetch single  contact
// app.get(ROUTE, function (request, response) {

// });
app.listen(5000);
console.log('ready to accept request');