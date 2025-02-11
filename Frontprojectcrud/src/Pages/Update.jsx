import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Update=()=>{
    const [val,setVal]=useState([]);
const navigate=useNavigate();

const Handelupdate=(id)=>{
    navigate(`/edit/${id}`)

}


    const getdata = ()=>{
        const api = "http://localhost:8000/employee/getdata";
        axios.post(api,val).then(res=>{alert("get the data")
            setVal(res.data);
        console.log(res.data);
        
    })
        
    }
    useEffect(()=>{
        getdata();
    },[]);

    const Handeldelete=(id)=>{
      const  api = "http://localhost:8000/employee/deletedata";
        axios.post(api,{id:id}).then((res)=>{alert("data delete suceesfully")
            getdata();
        })
    }
    const ans = val.map((key)=>{
        return(
            <>
            <thead>
            <tr>
                <td>{key.name}</td>
                <td>{key.empno}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td onClick={()=>{Handeldelete(key._id)}} ><MdDelete /></td>
                <td onClick={()=>{Handelupdate(key._id)}} ><FaPen /></td>
            </tr>
            </thead>
            
            </>
        )
    })
    return(
        <>
        <h1>Update employee page</h1>
         <Table striped bordered hover>
            <thead>
        <tr>
          <th>Employee Name</th>
          <th>Employee Number</th>
          <th>Employee Designation</th>
          <th>Employee Salary</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        </thead>
        {ans}
    </Table>

        </>
    )
}

export default Update;