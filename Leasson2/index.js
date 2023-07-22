/* 
const {getName, getResult} = require("./About");
console.log(getName());
console.log(getResult())
console.log("Home Page");
*/
/*
const fs = require('fs')
fs.unlink("text.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successfully")
    }
})
*/

const os = require("os");
const path = require("path")
/*
console.log(os.homedir())
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.totalmem());
console.log(os.freemem());
*/
console.log(path);
const extentionName = path.extname("labib.html");
console.log(extentionName);
const joinName = path.join(__dirname + "/../view");
console.log(joinName);
