const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProControlller");


route.get("/home", ProController.Homepage)
route.get("/about", ProController.Aboutpage);
route.get("/insert", ProController.Insertpage);
route.post("/save", ProController.SaveInsertData);
route.post("/delete/:id", ProController.DeleteData);






module.exports = route;