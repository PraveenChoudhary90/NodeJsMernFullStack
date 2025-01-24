const express = require("express")
const route = express.Router()

const StudentHome = require("../Controller/studentController");
const StudentPage = require("../Controller/studentController");
const StudentCourse = require("../Controller/studentController");
const Studentfees = require("../Controller/studentController");

route.get("/homepage",StudentHome.homepage);
route.get("/aboutstu", StudentPage.aboutpage)
route.get("/course" , StudentCourse.coursepage)
route.get("/ourfees", Studentfees.ourfees)
// route.get("/",(req,res)=>{
//     res.send("this is student router");
// })

module.exports = {route}