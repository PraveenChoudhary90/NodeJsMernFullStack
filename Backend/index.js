const express = require("express")
const app = express();
const StudentRoute = require("./Route/StudentRoute")
const Database = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors")
Database.connect("mongodb://127.0.0.1:27017/uidata").then(()=>{
    console.log("DB Connected")
})
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.use("/students", StudentRoute);




app.listen(8000,()=>{
    console.log("server is running on 8000 port")
})