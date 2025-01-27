const express = require("express");
const route = express.Router();
const StudentController = require("../Controller/StudentController")

route.get("/Home", StudentController.Homepage);
route.get("/About", StudentController.Aboutpage);
route.get ("/Insert", StudentController.Insertpage);
route.post("/save", StudentController.Savepage);
route.get("/display", StudentController.Displaypage );
route.post("/search", StudentController.searchpage);





module.exports = route;
