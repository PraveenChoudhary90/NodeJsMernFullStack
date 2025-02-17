const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const EmpRoute = require("./Route/EmpRoute")

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB is Conneted");
})

app.use(cors());
const port = process.env.PORT || 8000

app.use("/employee", EmpRoute)









app.listen(port,()=>{
    console.log(`Server is running on ${port} port`)
})