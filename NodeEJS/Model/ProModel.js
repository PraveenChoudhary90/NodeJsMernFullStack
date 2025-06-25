const mongoose = require("mongoose");
const ProSchema = new mongoose.Schema({
    name:String,
    email:String
})

module.exports = mongoose.model("Product", ProSchema);