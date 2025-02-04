const StudentModel = require("../Model/StudentModel");
const Savedata = async(req,res)=>{
    // res.send("okkkkk");
    // console.log(req.body);
    const {name,rollnumber,city,fees}=req.body;
    const data= await StudentModel.create({
        name:name,
        rollnumber:rollnumber,
        city:city,
        fees:fees

    })
    res.send(data);

  
}




module.exports = {
    Savedata
}