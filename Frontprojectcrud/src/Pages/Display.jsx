import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Display = ()=>{

    const [value, setValue]=useState([])

    const loaddata =()=>{
        const api = "http://localhost:8000/employee/displaydata";
        axios.get(api).then((res)=>{
        setValue(res.data);
          
        });
    }

    useEffect(()=>{
   loaddata()
    },[]);

    const ans=value.map((item)=>{
    
        <tr>
            <td>{item.name}</td>
            <td>{item.empno}</td>
            <td>{item.designation}</td>
            <td>{item.salary}</td>
        </tr>
    
})
    return(
        <>
        
    <h1> Employee Display Data here</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee No</th>
          <th>Employee Designation</th>
          <th>Salary</th>
          {ans}
        </tr>
      </thead>
    </Table>


        </>
    )
}
export default Display;