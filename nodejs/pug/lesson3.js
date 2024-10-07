var express = require('express');
var connection = require('./connection');
var cors = require('cors');
//these 2 modules are require to upload files 
var multer = require("multer"); //npm install multer
var path = require("path");

var app = express();


//required to access input submitted via post,put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());

app.set('view engine', 'pug');
app.set('views', 'views');
//set path using middleware 
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/mysql/images/category', express.static(path.join(__dirname, 'images/category/')));

app.use(cors({
    origin: 'http://localhost:5000',
    // Update with your React.js app's origin
    optionsSuccessStatus: 200,
}));

var storage = multer.diskStorage({
    //destination property is used to provide relative path where files will be uploaded
    destination: function (req, file, cb) {
        //2nd argument in cb is relative path where files will be uploaded
        cb(null, "document");
        //  console.log('destination ',file);
    },
    //filename propety is used to give unique file name to uploaded file
    filename: function (req, file, cb) {
        //2nd argument in cb is filename which has 2 part. 1st part is original file name and 2nd part is Date.now() means unique timestamp
        cb(null, file.fieldname + "-" + Date.now() + ".pdf");
        //  console.log('filename ',file.fieldname);

    },
});

const maxSize = 3 * 1024 * 1024; //maximum filesize is 3 mb. which you can change
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        var filetypes = /pdf|doc/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the " + "following filetypes - " + filetypes);
    },
});

// home about us service product contact
app.get("/", function (request, response) {
    response.render('home');
});
app.get("/aboutus", function (request, response) {
    response.render('aboutus');
});
app.get("/service", function (request, response) {
    //fetch data from database (service)
    var sql = "select * from services order by id";
    connection.con.query(sql, function (error, result) {
        if (error) {
            response.render('services');
            console.log(error);
        }
        else {
            response.render('services', {
                table: result
            });
        }
    });
});

app.get("/contactus", function (request, response) {
    response.render('contactus');
});

app.post("/insert-contact", upload.single("kundli"), function (request, response) {
    //name,email,subject,phone,message
    let { name, email, subject, phone, message } = request.body;
    console.log(request.body);
    if (name === undefined || email === undefined || subject === undefined || phone === undefined || message === undefined) {
        response.render('contactus', {
            message: 'required input are missing'
        });
    }
    else {
        if (request.file) {
            console.log("File:", request.file);
            let sql = `insert into contact (name,email,contactno,message,kundli) values ('${name}','${email}','${phone}','${message}','${request.file.filename}')`;
            connection.con.query(sql, function (error, result) {
                if (error) {
                    console.log(error);
                    response.render('contactus', {
                        message: 'oops, something went wrong, please try after sometime'
                    });
                }
                else {
                    //
                    response.render('contactus', {
                        message: 'Thanks for contacting us, we will get back you to soon'
                    });
                }
            });
        }

    }

});

app.listen(5000);
console.log('ready to accept request.');