const express = require("express");
const route = express.Router();

const StuController = require("../Controller/ControllerStu")

route.get("/home",StuController.homepage);
route.get("/about",StuController.aboutpage);
route.get("/course",StuController.coursepage);
route.get("/fees", StuController.feespage);


module.exports = route;