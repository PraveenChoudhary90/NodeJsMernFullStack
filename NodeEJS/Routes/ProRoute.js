const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProControlller");


route.get("/home", ProController.Homepage)
route.get("/about", ProController.Aboutpage);
route.get("/insert", ProController.Insertpage);






module.exports = route;