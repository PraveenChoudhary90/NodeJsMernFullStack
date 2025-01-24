const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    rollnumber:Number,
    name:String,
    city:String,
    fees:Number
})

module.exports =   mongoose.model("student", StudentSchema);