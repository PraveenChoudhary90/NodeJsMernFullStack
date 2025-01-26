const bodyParser = require("body-parser")
const StudentModel = require("../Models/StudentModel")
const cors = require("cors")

const homepage = (res,req)=>{
    res.send("home");
}
const insertpage = (req,res)=>{
    res.render("insert")
}

const save = async (req,res)=>{
    const {rollnumber, name, city, fees}= req.body;
    const Data = await StudentModel.create({
        rollnumber:rollnumber,
        name:name,
        city:city,
        fees:fees
    })
    // res.send("data save");
    res.send(Data)
    res.render("insert")
}

const displaypage = (res,req)=>{
    res.send("display");
}

module.exports = {
    homepage,
    insertpage,
    displaypage,
    save
}