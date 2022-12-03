const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')

//To read Environment Variables
dotenv.config({ path: "./Config/config.env" })

let port = process.env.PORT
let hostname = process.env.HOST_NAME

//Server Creation
let server = http.createServer((request, response) => {
    let url = request.url
    response.writeHead(200, { "Content-Type": "text/html" })

    if (url == "/") {
        fs.readFile('./views/index.htm', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    else if (url == "/about") {
        fs.readFile('./views/about.htm', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    else if (url == "/contact") {
        fs.readFile('./views/contact.htm', 'utf-8', (err, data) => {
            if (err) throw err
            response.end(data)
        })
    }
    else {
        response.writeHead(404, {"Content-Type": "text/html"})
        response.end("<h1>Page Not Found</h1>")
    }


})
server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
})