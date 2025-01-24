const express = require("express");
const app = express();

const CollRoute = require("./route/CollegRoutes")
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017");

app.use("/collage",CollRoute)

app.set("view engine" ,"ejs")
app.listen(8000,()=>{
    console.log("server is running on 8000 port");
})