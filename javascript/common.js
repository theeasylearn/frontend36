function getCurrentDate()
{
    let today = new Date(); //class type variables are called object
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let fulldate = day + "-" + month + "-" + year;
    return fulldate;
}
function getCurrentTime()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let fulltime = hours + ":" + minutes + ":" + seconds;
    return fulltime;
}
let setHtml = function(TagId,text)
{
    document.getElementById(TagId).innerHTML = text;
}
//create alias for setHtml function
let $$ = setHtml;

//arrow function
let getId = (TagId) => document.getElementById(TagId);
//create alias for getId function
let $ = getId;