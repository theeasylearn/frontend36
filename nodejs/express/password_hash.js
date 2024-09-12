const argon2 = require('argon2');
async function HashPassword(OriginalPassword) 
{
    try {
        const hash = await argon2.hash(OriginalPassword);
        // console.log(hash);
        return hash;
      } catch (err) {
        console.log(err);
        return '';
      }
}
async function MatchPassword(Hash,OriginalPassword)
{
    try {
        if (await argon2.verify(Hash,OriginalPassword)) {
          // password match
          return true;
        } else {
          // password did not match
          return false
        }
      } catch (err) {
        // internal failure
        return false;
        console.log(err);
      }
}
module.exports.MatchPassword = MatchPassword;
module.exports.HashPassword = HashPassword;

// HashPassword('Krishna').then((hash) => {
//     console.log(`Password Hashed =  ${hash}`);

//     MatchPassword(hash,'krishna').then((result) => {
//         if(result === true)
//             console.log('password match');
//         else 
//             console.log('password invalid');
//     })
// });
