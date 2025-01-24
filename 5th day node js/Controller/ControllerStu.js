

const homepage = (req,res)=>{
    res.render("home");
}

const aboutpage = (req,res)=>{
    res.render("about");
}


const coursepage = (req,res)=>{
    res.render("course");
}

const feespage = (req,res)=>{
    res.render("fees");
}

module.exports = {
    homepage,
    aboutpage,
    coursepage,
    feespage
}