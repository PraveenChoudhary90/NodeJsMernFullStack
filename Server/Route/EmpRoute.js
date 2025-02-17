const express  =require("express");
const route = express.Router();
const EmpController = require("../Controller/EmpController");


route.post("/insertdata", EmpController.insertdata);
route.post("/Logindata", EmpController.Logindata)





module.exports = route;