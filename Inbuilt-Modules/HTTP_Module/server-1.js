const http = require('http')


let server = http.createServer((request, response) => {
    // response.end("Node")
    response.end("<h1>Node</h1>")
})
server.listen(7000, () => {
    console.log("server is running on 7000...");
})