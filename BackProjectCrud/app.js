const express = require("express");
const app = express();
const EmpRoute = require("./Routes/EmpRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb://127.0.0.1:27017/Employeedb").then(()=>{
    console.log("DB is Connected");
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use("/employee", EmpRoute);

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})