const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const ProRoute = require("./Routes/ProRoute");




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.set("view engine", "ejs");

app.use("/Product", ProRoute);

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})