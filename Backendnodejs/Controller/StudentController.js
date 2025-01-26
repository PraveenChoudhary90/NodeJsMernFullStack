
const bodyParser = require("body-parser")

const Studentmodel = require("../Models/StudentModel")
const cors = require("cors")

const Homepage = (req,res)=>{
    res.render("home");
}

const Aboutpage = (req, res)=>{
    res.render("about");
}

const Insertpage = async (req ,res)=>{
   const {rollnumber, name, city, fees} = req.body;
   let data = await Studentmodel.create({
    rollnumber:rollnumber,
    name:name,
    city:city,
    fees:fees

   })
   res.send(data);
    res.render("insert");
}

const Displaypage = (req ,res)=>{
    res.render("display")
}
const Savepage = (req,res)=>{
    res.send("okkkkkkkkkkkkkkkkkkkkkkkkkkk");
}

module.exports = {
    Homepage,
    Aboutpage,
    Insertpage,
    Displaypage,
    Savepage
}
