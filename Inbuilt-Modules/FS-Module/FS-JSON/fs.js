const fs =  require('fs')

fs.readFile('var.json', 'utf-8', (err,data)=>{
    if (err) throw err
    console.log(data);
    fs.writeFile('jkl.txt', data, 'utf-8', (err)=>{
    //fs.writeFile('../jkl.txt', data, 'utf-8', (err)=>{
        if (err) throw err
    })
})