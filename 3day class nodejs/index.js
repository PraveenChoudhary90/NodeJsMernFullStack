const express = require("express")
const app = express();

app.set("view engine", "ejs")

 const StudentRoute = require("./routes/StudentRoutes");
 app.use("/collage",StudentRoute)
app.listen(8000,()=>{
    console.log("server is running on 8000 port");
})

// const http  = require("http")
// http.createServer((req,res)=>{
//     res.write("<h1>hello this praveen</h1>")
// }).listen(8000) 