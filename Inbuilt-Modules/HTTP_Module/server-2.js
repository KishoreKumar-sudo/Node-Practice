const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')

//To read Environment Variables
dotenv.config({ path: "./Config/config.env" })

let port = process.env.PORT
let hostname = process.env.HOST_NAME

//Server Creation
let server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile('./views/index.htm','utf-8',(err, data)=>{
        if (err) throw err
        response.end(data)
    })
})
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})