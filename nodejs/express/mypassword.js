// cd // generate 6 digit otp 
module.exports.getOTP = function(length=6){
    let part1 = Math.floor(Math.random() * 90) + 10;
    let part2 = Math.floor(Math.random() * 90) + 10;
    let part3 = Math.floor(Math.random() * 90) + 10;
    return part1 + "" + part2 + "" + part3;
}
module.exports.getRandomPassword = function(length = 10) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    // Ensure at least one character from each set
    let password = [
        uppercase[Math.floor(Math.random() * uppercase.length)],
        lowercase[Math.floor(Math.random() * lowercase.length)],
        digits[Math.floor(Math.random() * digits.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ];

    // Fill the remaining length with random characters from all sets combined
    const allCharacters = uppercase + lowercase + digits + symbols;
    for (let i = 4; i < length; i++) {
        password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }
    // Shuffle the password array to randomize the order of characters
    password = password.sort(() => Math.random() - 0.5);
    // Return the password as a string
    return password.join('');
};
