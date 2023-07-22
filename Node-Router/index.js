const http = require("http");
const fs = require("fs");

const myRoute = http.createServer((req,res)=>{
   const headFile = (statusCode, fileLocation)=>{
    fs.readFile(fileLocation, (err, data)=>{
        res.writeHead(statusCode, {"Content-Type" : "text/html"})
        res.write(data)
        res.end()
    })
   }

  if(req.url === "/"){
    headFile(202, "./views/index.html")
  }else if(req.url === "/about"){
    headFile(202, "./views/About.html")
  }else if(req.url === "/service"){
    headFile(404, "./views/Service.html")
  }
    
   
})
myRoute.listen(3004, ()=>{
    console.log("Server Is Come Back")
})