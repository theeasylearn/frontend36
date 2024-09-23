var express = require('express');
var mongodb = require('mongodb');
var { dbPromise } = require('./myconnection');
var parser = require('body-parser');

var app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added
var client = mongodb.MongoClient;
const ROUTE = '/person';
//it is used to insert new person
app.post(ROUTE,function(request,response){

    dbPromise.then((database) => {
        let data = request.body;
        console.log(data);
        database.collection('easylearn').insertOne(data,function(error,result){
            if(error)
                response.json([{'error':'error in updating document'}]);
            else 
                response.json([{'error':'no'},{'message':'document inserted'}]);
        });

    }).catch((error) => {
        response.json([{ 'error': 'error in connection' }]);
    });
});


//it is used to update existing person
app.put(ROUTE,function(request,response){
    let {name,pincode,address} = request.body;
    if(name === undefined || pincode === undefined || address === undefined)
    {
        response.json([{'error':'input is missing'}]);
    }    
    else 
    {
        dbPromise.then((database) => {
            let condition = {name : name};
            let newvalue = { $set : 
                {
                    address: address,
                    pincode: pincode
                }
            };
            database.collection('easylearn').updateOne(condition,newvalue,function(error,result){
                if(error)
                    response.json([{'error':'error in updating document'}]);
                else 
                    response.json([{'error':'no'},{'message':'document updated'}]);
            });
        }).catch((error) => {
            response.json([{ 'error': 'error in connection'}]);
        })
    }
});

//it is used to delete  person
app.delete(ROUTE,function(request,response){
    
    dbPromise.then((database) => {
        var condition = {subject:'mongodb'};
        database.collection('easylearn').deleteOne(condition,function(error,result){
            if(error)
                response.json([{'error':'error in deleting document'}]);
            else 
                response.json([{'error':'no'},{'message':'document deleted'}]);
        });
    }).catch((error) => {
        response.json([{ 'error': 'error in connection'}]);
    })
});


//it is used to get all persons
app.get(ROUTE,function(request,response){

});

// //it is used to get paticular persons by id
// app.get(ROUTE,function(request,response){

// });

app.listen(5000);
console.log('ready to accept request');

