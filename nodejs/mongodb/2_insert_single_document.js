var mongdb = require('mongodb')
var client = mongdb.MongoClient;
var database_address = "mongodb://0.0.0.0:27017/frontend36";
client.connect(database_address,function(error,database){
    if(error)
        console.log(error);
    else 
    {
        console.log('connected');
        let db = database.db('frontend36');
        let person = {'name':'Ankit Patel','address':'Iscon City','pincode':364001};
        db.collection('easylearn').insertOne(person,function(e,result){
            if(e)
                console.log(e);
            else 
                console.log('document inserted....');
        })
    }
});
