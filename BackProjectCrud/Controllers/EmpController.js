const EmpModel = require("../Models/EmpModel");

const Insertdata =async (req,res)=>{
    const{name,empno,designation,salary}=req.body;
    const Data = await EmpModel.create({
           name:name,
           empno:empno,
           designation:designation,
           salary:salary
    })
    res.send("Data added ");
    console.log(Data);
   
}

const Displaydata=async(req,res)=>{
  const Datapage = await EmpModel.find();
  console.log("data okkk");
  res.send("display data");
  console.log(Datapage);

}





module.exports={
    Insertdata,
    Displaydata,
}