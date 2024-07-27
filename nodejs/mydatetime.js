//this is our local module 
function getCurrentDate()
{
    let today = new Date(); 
    let fulldate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    return fulldate;
}
function getCurrentTime()
{
    let now = new Date();
    let time = now.getHours() + ":" + now.getMinutes();
    return time;
}
//to use these functions we must export each and every function like below
module.exports.getDate = getCurrentDate;
module.exports.getTime = getCurrentTime;