

const Homepage =(req,res)=>{
    res.render("Home");
}

const Aboutpage =(req,res)=>{
    res.render("About");
}

const Insertpage =(req,res)=>{
    res.render("Insert");
}



module.exports= {
    Homepage,
    Aboutpage,
    Insertpage
}