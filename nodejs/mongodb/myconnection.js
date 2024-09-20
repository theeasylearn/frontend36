var mongdb = require('mongodb')
var client = mongdb.MongoClient;
var database_address = "mongodb://0.0.0.0:27017/frontend36";
client.connect(database_address,function(error,result){
    if(error)
        console.log(error);
    else 
        console.log('connected');
});
