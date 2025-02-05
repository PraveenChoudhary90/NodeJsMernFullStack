const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors=require("cors");
const StudentRoute = require("./Route/StudentRoute");
const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




mongoose.connect("").then(()=>{
    console.log("DB Connected!!!!!");
})




app.use("/Employee" , StudentRoute);
app.listen(8000,()=>{
    console.log("server is running on 8000 port");
})