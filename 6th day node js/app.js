const express = require("express")
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello this is home page")
})

// app.post("/post",(req,res)=>{
//     console.log(req.body)
//     res.send("ok")
// })
const studentRoute = require("./route/stuRoute")

app.use("/student",studentRoute)


app.listen(8000,()=>{
    console.log("server is listening on port number 8000")
})