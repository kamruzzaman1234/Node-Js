const http = require("http");
const port = 30001

const createServer1 = http.createServer((req,res)=>{
    res.writeHead(202, {"Content-Type":"text/html"})
    res.write("<h1>Hellow Server Side </h1>")
    res.end()
})

createServer1.listen(port, ()=>{
    console.log("Server is Start");
})