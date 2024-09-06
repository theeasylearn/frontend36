var mysql = require('mysql2');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // 'user' instead of 'username'
    password: '',    // root's password (empty string here)
    port: 3306,
    database: 'frontend36'
});
con.connect(function(error){
    if(error!=null)
        console.log(error);
    else 
        console.log('connection created successfully');
});
module.exports.con = con;