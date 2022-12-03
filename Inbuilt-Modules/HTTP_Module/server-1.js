const http = require('http')


let server = http.createServer((request, response) => {
    resp.writeHead(200,{"Content-Type":"text/html"})
    // response.end("Node")
    response.end("<h1>Node</h1>")
})
server.listen(7001, () => {
    console.log("server is running on 7001...");
})