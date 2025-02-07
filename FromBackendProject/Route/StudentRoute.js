const express = require("express");
const route = express.Router();
const StudentController = require("../Controller/StudentController");





route.post("/savadata", StudentController.Savedata);




module.exports = route;