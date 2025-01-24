const Bodyparser = require("body-parser")
const Studentmodel = require("../Model/StudentModel")
const homepage = (req,res)=>{
    res.render("home");
}

const insertpage = (req,res)=>{
    res.render("insert");
}

const displaypage = async(req,res)=>{
    const Data = await Studentmodel.find();
    res.render("display" , {mydata:Data});
}

const savepage = async (req,res)=>{
    const {rollnumber, name, city, fees}= req.body;
    const Data = await Studentmodel.create({
        rollnumber:rollnumber,
        name:name,
        city:city,
        fees:fees
    })
    // res.send("data save");
    // res.send(Data)+
    res.render("insert")
}






module.exports = {
    homepage,
    insertpage,
    displaypage,
    savepage
}