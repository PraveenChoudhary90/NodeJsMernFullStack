const express = require("express");
const route = express.Router();
const StuController = require("../Controller/StuController")

route.get("/home", StuController.homepage )
route.get("/about", StuController.aboutpage )
route.get("/course", StuController.coursepage )
route.get("/fees", StuController.feespage)
route.get("/faculty", StuController.facultypage )

module.exports = route;