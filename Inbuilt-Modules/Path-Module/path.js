const fs = require('fs')
const path = require('path')

let filepath = path.join(__dirname, 'Imad File','JSON','emp.json')


fs.readFile(filepath, 'utf-8', (err,data)=>{
    if (err) throw err
    console.log(data);
fs.writeFile('output.json', data, 'utf-8',(err)=>{
    if(err) throw err
})
})

