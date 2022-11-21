const fs = require ('fs')

let data = "Hi Imad"
fs.writeFile('ghi.txt',data,'utf-8', (err)=>{
if (err) throw err
})