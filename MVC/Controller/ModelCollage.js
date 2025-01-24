const collageModel = require("../Model/CollageRoutes")
const homepage = (req,res)=>{
    res.render("index");
}

const aboutpage = (req,res)=>{
    res.render("about");
}

const coursepage = (req,res)=>{
    res.render("courses");
}
const facultypage = (req,res)=>{
    res.render("faculty");
}

const contactpage = (req,res)=>{
    res.render("contact");
}


module.exports = {
    homepage,
    aboutpage,
    coursepage,
    facultypage,
    contactpage
}