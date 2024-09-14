var g = require('./gmail');
//create object of gmail
var email = new g.gmail();
receiver = 'theeasylearn@gmail.com,vivek.sonrat@gmail.com';
message = 'test email';
subject = 'first email from frontend36';
email.send(receiver,subject,message);