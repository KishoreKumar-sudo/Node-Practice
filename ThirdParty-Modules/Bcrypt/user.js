const bcrypt = require('bcrypt')

let user = {
    email: "kk97@gmail.com",
    password: "IamTheDevilOfMyLife",
    cc: "9876543298765432"
}

//algorithm for converting user sensitive data to hash code
let salt = bcrypt.genSaltSync(10)
let new_email = bcrypt.hashSync(user.email, salt)
let new_password = bcrypt.hashSync(user.password, salt)
let new_cc = bcrypt.hashSync(user.cc, salt)

console.log(user.password);
console.log(new_password);
console.log(user.email);
console.log(new_email);
console.log(user.cc);
console.log(new_cc);

//algorithm to compare the user sensitive data and hashed format --it's used when the same person login's gets logged in..

let pass = "MywaySkyWay"
let new_pass = bcrypt.hashSync(pass, salt)
let flag = bcrypt.compareSync('MywaySkyWay', new_pass)
//let flag = bcrypt.compareSync('hello', new_pass)
console.log(flag);

if (flag) {
    console.log("Password Matched");
}
else{
    console.log("You're the culprit");
}