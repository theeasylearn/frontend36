var mongodb = require('mongodb');
var client = mongodb.MongoClient;
const DATABASE_NAME = "frontend36";
var database_url = "mongodb://0.0.0.0:27017/" + DATABASE_NAME;
let db = client.connect(database_url).then((client) => {
    console.log('connection created....');
    return client.db(DATABASE_NAME);
}).catch((error) => {
    console.error(error);
    throw error;
});
module.exports.dbPromise = db;