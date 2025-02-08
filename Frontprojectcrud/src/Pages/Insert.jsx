import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from "axios"
import {message} from "antd";


const Insert = ()=>{

    const [Input , setInput]=useState({});


    const Handelchange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput((values)=>({...values, [name]:value}));
        console.log(Input);

    }
    const Handelsubmit=async(e)=>{
        e.preventDefault();
      const api = "http://localhost:8000/employee/insertdata";
      const Response = await axios.post(api,Input).then(res=>alert("Data successfully Insert & Added"));
      message.success("Data successfully Insert & Added");
      console.log(Response.data);
    }

    return(
        <>
      <div id="myfrom">  
    <h1> Insert Employee Data</h1>
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
export default Insert;