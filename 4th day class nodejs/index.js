const express = require("express")
const app = express();
const StudentData = require("./route/stuRoute");

app.use("/student",StudentData);



app.listen(8000,()=>{
    console.log("server is running on 8000 port")
})