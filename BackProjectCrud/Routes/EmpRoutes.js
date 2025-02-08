const express = require("express");
const route = express();
const EmpController = require("../Controllers/EmpController");


route.post("/insertdata", EmpController.Insertdata )
route.get("/displaydata",EmpController.Displaydata)



module.exports = route;