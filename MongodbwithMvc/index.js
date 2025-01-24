const express = require("express");
const app = express();
const StudentRoute = require("./Route/StudentRoute");
const Database = require("mongoose");
const bodyParser = require("body-parser")
Database.connect("mongodb://127.0.0.1:27017/studentdata").then(()=>{
    console.log("DB Conneted");

}
)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())




app.use("/students", StudentRoute);

app.set("view engine","ejs")


app.listen(8000,()=>{
    console.log("server is run on 8000 port");
})