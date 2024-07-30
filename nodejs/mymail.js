class MyMail
{
    constructor(receiver,subject,message)
    {
        this.receiver = receiver;
        this.subject = subject;
        this.message = message;
        console.log('constructor called');
    }
    send()
    {
        console.log('i will send email');
        console.log(this.receiver,this.subject,this.message);
    }
}
module.exports.MyMail = MyMail;