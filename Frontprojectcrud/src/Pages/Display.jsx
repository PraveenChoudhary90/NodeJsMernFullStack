import { useEffect, useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';

const Display = ()=>{

    const [user, setUser]= useState([]);

    const Getdata =async()=>{
        const api = "http://localhost:8000/employee/displaydata";
       await axios.get(api).then((res)=>{
       setUser(res.data);
       console.log(res.data);
        })
    }
    useEffect(()=>{
        Getdata();
    },[]);


    const ans= user.map((key)=>{
        return(
            <tbody>
            <tr>
            <td>{key.name}</td>
            <td>{key.empno}</td>
            <td>{key.designation}</td>
            <td>{key.salary}</td>
            </tr>
            </tbody>
        )
    })
    
    return(
        <>
        
    <h1> Employee Display Data here</h1>
         <Table striped bordered hover>
            <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee Number</th>
          <th>Employee Designation</th>
          <th>Employee Salary</th>
        </tr>
        </thead>
        {ans}
    </Table>




        </>
    )
}
export default Display;