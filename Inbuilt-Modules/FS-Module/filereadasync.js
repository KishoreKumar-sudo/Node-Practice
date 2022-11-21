const fs = require ('fs')

fs.readFile('abc.txt', 'utf-8', (err, data)=>{
    if (err) throw err
    console.log(err); 
})