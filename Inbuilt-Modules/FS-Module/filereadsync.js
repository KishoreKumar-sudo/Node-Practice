const fs = require ('fs')

let read = fs.readFileSync('abc.txt','utf-8')
console.log(read);