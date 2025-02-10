import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react";
const Edit=()=>{
    const navigate=useNavigate();
    const {id}=useParams();

  
    const [input, setInput]= useState({});
   const Handelchange=(e)=>{
       const name = e.target.name;
       const value = e.target .value;
       setInput(values=>({...values,[name]:value}));
       console.log(input);
   }
   


   const loadData=()=>{
    const api='http://localhost:8000/employee/Editdatasave';
    axios.post(api,{id:id}).then((res)=>{
        alert("data coming and update")
        setInput(res.data)
    })
}


useEffect(()=>{
   loadData() 
},[])



    const Handelsubmit=()=>{
    // e.preventDefault();
    const api = "http://localhost:8000/employee/editdata";
    axios.post(api,input).then((res)=>{
        alert("data update suceesfully");
            navigate("/update")


    })

   }




    return(
        <>
         <div id="myfrom">  
    <h1> UpDate Employee Data</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name='name' onChange={Handelchange} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee No</Form.Label>
        <Form.Control type="text" name='empno' onChange={Handelchange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text" name='designation' onChange={Handelchange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type="text" name='salary' onChange={Handelchange} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={Handelsubmit}>
        Submit
      </Button>
    </Form>
    </div>

        </>
    )
}
export default Edit