
const mongoose = require("mongoose");

const empSchema= new mongoose.Schema({
    name:String,
    empno:String,
    designation:String,
    salary:Number
})

module.exports = mongoose.model("employee", empSchema);