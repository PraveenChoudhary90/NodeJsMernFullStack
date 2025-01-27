import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const [rno, setRno]= useState("");
    const [mydata, setMydata]= useState([]);    
    const handleSubmit=()=>{
        let api="http://localhost:8000/students/search";
        axios.post(api, {sturno:rno}).then((res)=>{
            console.log(res.data);
            setMydata(res.data);

        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
             <h1> Student name : {key.name}, city : {key.city}</h1>
             <h2> Rollno : {key.rollnumber} </h2>
             <h2> Total Fees : {key.fees} </h2>
            </>
        )
    })
    return(
        <>
          <h1> Search data</h1>
          Enter Rollnumber : <input type="text" value={rno} 
          onChange={(e)=>{setRno(e.target.value)}} />
          <button onClick={handleSubmit}> Search</button>
          <hr />
          {ans}
        </>
    )
}

export default Search;