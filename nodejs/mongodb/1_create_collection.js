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
        db.createCollection('country',function(e,response){
            if(e!=null)
                console.log('error in creating collection');
            else 
                console.log('collection created successfully');
        });
    }
});
