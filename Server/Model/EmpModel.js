const mongoose = require("mongoose");
const EmpSchema = new mongoose.Schema({
    name:String,
    number:Number,
    email:String,
    city:String,
    password:String
})

module.exports = mongoose.model("empdataaa", EmpSchema);