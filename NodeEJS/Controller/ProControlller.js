

const Homepage =(req,res)=>{
    res.send("Home page here");
}

const Aboutpage =(req,res)=>{
    res.send("About page here");
}

const Insertpage =(req,res)=>{
    res.send("Insert page here");
}



module.exports= {
    Homepage,
    Aboutpage,
    Insertpage
}