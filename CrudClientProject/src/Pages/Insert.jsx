import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import {message} from "antd"
const Insert = ()=>{
  const [mydata, setMydata]= useState({});


  const handlechange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setMydata((values)=>({...values,[name]:value}));
    console.log(mydata);
  }

const HandleSubmit= (e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/employe/insert";
    axios.post(api, mydata);
    message.success("data succesfull");
    
}

    return(
        <>
        <div id="formdata">
        <h1>Employee Insert data</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee  Name</Form.Label>
        <Form.Control type="text" name='name'  onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee No.</Form.Label>
        <Form.Control type="text" name='empno' onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" name='designation' onChange={handlechange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" name='salary' onChange={handlechange} />
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={HandleSubmit} >
        Submit
      </Button>
    </Form>
    </div>
        
        </>
    )
}
export default Insert;