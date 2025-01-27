
const bodyParser = require("body-parser")

const Studentmodel = require("../Models/StudentModel")
const cors = require("cors")

const Homepage = (req,res)=>{
    res.render("home");
}

const Aboutpage = (req, res)=>{
    res.render("about");
}

const Savepage = async (req ,res)=>{
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

const Displaypage = async(req ,res)=>{
    let Data =await Studentmodel.find();
    res.send(Data);
}
const Insertpage = (req,res)=>{
    res.render("insert");
}


const searchpage=async(req, res)=>{
  const { sturno } =req.body;
  const Data=await   Studentmodel.find({rollnumber:sturno});
  res.send(Data);
}

module.exports = {
    Homepage,
    Aboutpage,
    Insertpage,
    Displaypage,
    Savepage,
    searchpage
}
