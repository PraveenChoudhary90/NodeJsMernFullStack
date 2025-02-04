import { useState } from "react";
import axios from "axios";


const Insert = ()=>{

    const [input , setInput]=useState({});

    const ChangeInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        // setInput({
        //     ...input,
        //     [name]:value
        // })
        setInput((values)=>({...values,[name]:value}));
        console.log(input);
    }
    const Handlesubmit=()=>{
        console.log(input);
        const api = "http://localhost:8000/Employee/savedata";
       axios.post(api,input).then(res=>{

        console.log(res.data);
            alert("data addon successful")});
    }

    return(
        <>
        
        <h1> welcomer to  our Insert page</h1>
        <h1>Application from</h1>
        My Name : <input type="text" name="name" onChange={ChangeInput} /><br></br>
        My Rollnumber : <input type="text" name="rollnumber" onChange={ChangeInput} /><br></br>
        My City : <input type="text" name="city" onChange={ChangeInput} /><br></br>
        My Fees : <input type="text" name="fees" onChange={ChangeInput} /><br></br>
        <button onClick={Handlesubmit} >Save data!!!</button>
        </>
    )
}
export default Insert;