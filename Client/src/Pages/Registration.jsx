import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"



const Registration = ()=>{
    const [input, setinput] = useState({});

  const Handelchange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setinput((values)=>({...values,[name]:value}));
    console.log(input);

  }
  const Handelsubmit =async (e)=>{
    e.preventDefault();
    const api  = "http://localhost:8000/employee/insertdata";
    try {
        let response = await axios.post(api, input).then((res)=>
            {
        alert("You are Registered ");
        // setinput(res.data);
        console.log(res.data)
          
        })
    } catch (error) {
        console.log(error);
        alert("server error");
    }

  }


    return(
        <>
        <div id="myfrom">
        <h1>Registration page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={Handelchange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Employee Number</Form.Label>
        <Form.Control type="text" name='number' value={input.number} onChange={Handelchange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Employee Email</Form.Label>
        <Form.Control type="text" name='email' value={input.email} onChange={Handelchange}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Employee City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={Handelchange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={input.password} onChange={Handelchange} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={Handelsubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}
export default Registration;