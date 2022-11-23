const dotenv = require('dotenv')
const path = require('path')

let file_path = path.join(__dirname, 'File', 'Config', 'config.env')
//with path_module
dotenv.config({path:file_path})

//without path_module
// dotenv.config({path:'./config.env'})

console.log(process.env.PORT);
console.log(process.env.HOST_NAME);
console.log(process.env.SECRET_KEY);
