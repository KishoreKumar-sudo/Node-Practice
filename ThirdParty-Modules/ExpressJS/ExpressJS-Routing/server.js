//Basic server creation
const http = require('http');
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config({path:'./Config/config.env'})
let port = process.env.PORT 
let host = process.env.HOST_NAME
let server = http.createServer((request,response)=>{
    response.writeHead(200, {"Content-Type":"text/html"})
    // response.writeHead(200, {"Content-Type":"text/plain"})
    response.end("<h2>Hello Machan</h2>")
})

server.listen(8050,()=>{
    console.log(`Server is running http://localhost:8050`);
})