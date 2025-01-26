const express = require("express");
const route = express.Router();
const StudentController = require("../Controller/StudentController")

route.get("/Home", StudentController.Homepage);
route.get("/About", StudentController.Aboutpage);
route.get ("/Insert", StudentController.Insertpage);
route.get("/Display", StudentController.Displaypage );
route.post("/save", StudentController.Savepage);





module.exports = route;
