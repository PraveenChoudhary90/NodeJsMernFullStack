import { useState, useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata, setMydata]= useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/students/display";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.rollnumber} </td>
                <td> {key.name} </td>
                <td> {key.city} </td>
                <td> {key.fees} </td>
              </tr>
            
            </>
        )
    })
    useEffect(()=>{
        loadData();
    }, []);

    return(
        <>
         <h1> Display Data</h1>
         <table border="1" width="50%" align="center" bgcolor="yellow">
            <tr>
                <th>Rollnumber</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
         </table>
        </>
    )
}

export default Display;