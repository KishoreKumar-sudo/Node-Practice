const fs = require('fs')

let data = 'hello'
fs.writeFileSync('def.txt', data, 'utf-8')