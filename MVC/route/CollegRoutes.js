const express = require("express")
const route = express.Router();
const CollageController = require("../Controller/ModelCollage")


route.get("/home",CollageController.homepage);
route.get("/about",CollageController.aboutpage);
route.get("/courses",CollageController.coursepage);
route.get("/faculty",CollageController.facultypage);
route.get("/contact",CollageController.contactpage);



module.exports = route