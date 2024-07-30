// generate 6 digit otp 
module.exports.getOTP = function(length=6){
    let part1 = Math.floor(Math.random() * 90) + 10;
    let part2 = Math.floor(Math.random() * 90) + 10;
    let part3 = Math.floor(Math.random() * 90) + 10;
    return part1 + "" + part2 + "" + part3;
}
module.exports.getRandomPassword = function(length=10){
    // must have uppercase , lowercase, digit and symbols in password
    return "";
}