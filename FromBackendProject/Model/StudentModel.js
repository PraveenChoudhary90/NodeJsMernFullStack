const mongoose = require("mongoose");
const stuSchema = new mongoose.Schema(
    {
        name:String,
        rollnumber:Number,
        city:String,
        Fees:Number
    }
);





module.exports = mongoose.model("studentpack", stuSchema);