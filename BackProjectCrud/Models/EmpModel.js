const mongoose = require("mongoose");
const EmpSchema = new mongoose.Schema(
    {
        name:String,
        empno:String,
        designation:String,
        salary:Number
    }
);
module.exports= mongoose.model("Empdata", EmpSchema);