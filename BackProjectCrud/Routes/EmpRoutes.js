const express = require("express");
const route = express.Router();
const EmpController = require("../Controllers/EmpController");


route.post("/insertdata", EmpController.Insertdata )
route.get("/displaydata",EmpController.Displaydata)
route.post("/searchdata", EmpController.Searchdata);
route.post("/getdata", EmpController.Getdata);
route.post("/deletedata", EmpController.Deletedata)
route.post("/editdata", EmpController.Editdata);
route.post("/Editdatasave",EmpController.EditUpdateData);



module.exports = route;