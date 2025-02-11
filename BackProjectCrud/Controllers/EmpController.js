const EmpModel = require("../Models/EmpModel");

const Insertdata = async (req, res) => {
  const { name, empno, designation, salary } = req.body;
  const Data = await EmpModel.create({
    name: name,
    empno: empno,
    designation: designation,
    salary: salary,
  });
  res.send("Data added ");
  console.log(Data);
};

const Displaydata = async (req, res) => {
  const Datapage = await EmpModel.find();
  console.log("data okkk");
  res.send(Datapage);
  console.log(Datapage);
};

const Searchdata = async (req, res) => {
  const { name } = req.body;
  const Search = await EmpModel.find({ name: name });
  res.send(Search);
 
};


const Getdata =async (req,res)=>{
 const Data = await EmpModel.find();
 console.log(Data);
 res.send(Data);
}


const Deletedata=async(req,res)=>{
 const {id}=req.body;
  await EmpModel.findByIdAndDelete(id);
 res.json("Data is delete succesfully")

}

const Editdata=async(req,res)=>{
  const {id}=req.body;
  const Data = await EmpModel.findById(id);
  res.send(Data);
}

const EditUpdateData=async(req,res)=>{
  const {_id}= req.body;
  await EmpModel.findByIdAndUpdate(_id,req.body);
  res.send("")
}


module.exports = {
  Insertdata,
  Displaydata,
  Searchdata,
  Getdata,
  Deletedata,
  Editdata,
  EditUpdateData
  
};
