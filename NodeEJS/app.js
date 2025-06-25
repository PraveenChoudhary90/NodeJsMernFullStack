const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const ProRoute = require("./Routes/ProRoute");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/EJSDATA").then(()=>{
    console.log("DB IS CONNECTED");
})

app.set("view engine", "ejs");

app.use("/Pro", ProRoute);

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})