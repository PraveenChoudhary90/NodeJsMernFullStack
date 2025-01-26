import { useState } from "react";
import axios from "axios"

const Insert= ()=>{
    let [inputname,setInput]=useState({
        rollnumber:"",
        name:"",
        city:"",
        fees:""
    });
    function hinput(event){
        console.log(event.target.value);
        const {name,value}=event.target;
        setInput(event.target.value);
        setInput({
            ...inputname,
            [name]:value
        });
    };
    const finalsubmit =(event)=>{
        event.preventDefault();
        console.log(inputname);
        axios.post("http://localhost:8000/students/save",inputname).then(res=>alert("aapka data insert ho chuka hai"));
        // console.log(req.save) 

    }

    return(
        <>
        <h1>Insert Page here</h1>
        <form onSubmit={finalsubmit} >
        <label htmlFor="">Enter Rolnumber</label>
        <input type="text" name="rollnumber" placeholder="Enter the rollnumber" value={inputname.rollnumber} onChange={hinput} /><br/><br/>
         <label htmlFor="">Enter the Name</label>
        <input type="text" name="name" placeholder="Enter the name" value={inputname.name} onChange={hinput} /><br/><br/>
         <label htmlFor="">Enter the city</label>
        <input type="text" name="city" placeholder="Enter the city" value={inputname.city} onChange={hinput} /><br/><br/>
         <label htmlFor="">Enter fees</label>
        <input type="text" name="fees" placeholder="Enter fees" value={inputname.fees} onChange={hinput} /><br/><br/>
        <input type="submit" />
        </form>
        </>
    )
};
export default Insert;