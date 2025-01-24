const mongoose = require("mongoose");
const contactShema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    age:Number,
    city:String
})
module.exports = mongoose.model("praveen", contactShema)