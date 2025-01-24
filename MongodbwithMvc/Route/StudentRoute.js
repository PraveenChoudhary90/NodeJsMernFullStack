const express = require("express");
const route = express.Router();
const StudentController = require("../Controller/StudentController");



route.get("/home", StudentController.homepage);
route.get("/insert", StudentController.insertpage);
route.get("/display", StudentController.displaypage);
route.post("/save", StudentController.savepage);



module.exports = route;