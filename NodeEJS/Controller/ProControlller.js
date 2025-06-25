const ProModel = require("../Model/ProModel");


const Homepage =(req,res)=>{
    res.render("home");
}

const Aboutpage =async(req,res)=>{
    const Data = await ProModel.find();
    res.render("about", {mydata:Data});
}

const Insertpage =(req,res)=>{
    res.render("insert");
}

const SaveInsertData =async(req,res)=>{
  const {name, email} = req.body;
  const Data = await ProModel.create({
    name:name,
    email:email
  })
  res.render("insert");

}


const DeleteData =async(req,res)=>{
    const id = req.params.id;
    await ProModel.findByIdAndDelete(id);
    res.render('about');
}



module.exports= {
    Homepage,
    Aboutpage,
    Insertpage,
    SaveInsertData,
    DeleteData
}