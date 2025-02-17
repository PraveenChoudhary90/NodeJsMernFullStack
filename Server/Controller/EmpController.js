const EmpModel = require("../Model/EmpModel");

const insertdata=async (req,res)=>{
    const {name,number,email,city,password}= req.body;
    try {
         const Employee = await EmpModel.create({
        name:name,
        number:number,
        email:email,
        city:city,
        password:password
    })
    console.log(Employee)
    res.send("okkkk")
        
    } catch (error) {
        console.log(error);
        
    }
}

const Logindata=async(req,res)=>{
    const{email,password}=req.body;
    try {
        let Data = await EmpModel.findOne({email:email});
        if(!Data){
            res.send("Invalid Email");
        }
        if(Data.password!=password){
            res.send("Invalid Password")
        }
        res.send(Data);
    } catch (error) {
        console.log(error)
    }
   
}





module.exports = {
    insertdata,
    Logindata
}