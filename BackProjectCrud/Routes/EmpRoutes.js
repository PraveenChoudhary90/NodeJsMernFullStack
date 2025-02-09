const express = require("express");
const route = express.Router();
const EmpController = require("../Controllers/EmpController");


route.post("/insertdata", EmpController.Insertdata )
route.get("/displaydata",EmpController.Displaydata)
route.post("/searchdata", EmpController.Searchdata);
route.post('/deletedata',EmpController.deletedata);
route.post('/getEditData',EmpController.editShow);
route.post('/editdata',EmpController.dataSaveEdit);



module.exports = route;