const express = require("express");
const app = express();
const StudentRoute = require("./Routes/StudentRoute");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
mongoose.connect("mongodb://127.0.0.1:27017/Praveen").then(()=>{
    console.log("DB is connected");
})

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use("/students", StudentRoute);





app.listen(8000,()=>{
    console.log("server is run on 8000 port");
})