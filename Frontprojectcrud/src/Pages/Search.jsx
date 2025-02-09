import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table'


const Search = ()=>{
    const [Val,setVal]= useState([]);
    const [name , setName]= useState("");

    const Searchdata=async()=>{
        const api = "http://localhost:8000/employee/searchdata";
       await axios.post(api,{name:name}).then((res)=>{
        setVal(res.data);
        console.log(name);

    })
    }

    const ans = Val.map((key)=>{
        return(
            <tr>
                <td>{key.name}</td>
                <td>{key.empno}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
            </tr>
        )
    })

    return(
        <>
        
    <h1> Employee  Search page</h1>
    Emplyee Name : <input type="text" name="name"  onChange={(e)=>{setName(e.target.name)}}/>
    <button onClick={Searchdata} >Search data</button>
      


       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee No</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        {ans}
      </thead>
      </Table>

        </>
    )
}
export default Search;