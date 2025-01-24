// const http = require("http")

// http.createServer((req,res)=>{
//     res.write("<h1>Hello world hr</h1>")
// }).listen(8001)
const express = require("express");
const app = express();
app.set("view engine","ejs")


const StudentData = require("./Route/StuRoute")

  app.use("/students",StudentData);


app.listen(8000,()=>{
    console.log("server is runing on 8000 port")
})