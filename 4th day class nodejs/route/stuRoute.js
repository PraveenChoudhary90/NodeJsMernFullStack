const express = require("express");
const route = express.Router();

route.get("/home",(req,res)=>{
    res.send("student home page")
})

//request response

route.get("/about",(req,res)=>{
    res.send("student about page")
})

route.get("/course",(req,res)=>{
    res.send("student course page")
})

route.get("/fees",(req,res)=>{
    res.send("student fees page")
})

module.exports = route;