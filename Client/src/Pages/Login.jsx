import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from 'react-router-dom';



const Login = ()=>{
    const navigate = useNavigate();
    const [input, setinput] = useState({});

  const Handelchange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setinput((values)=>({...values,[name]:value}));
    console.log(input);

  }
  const Handelsubmit =async (e)=>{
    e.preventDefault();
    const api  = "http://localhost:8000/employee/Logindata";
    try {
        const Data = await axios.post(api, input).then((res)=>
            {
                console.log(res.data.email)
        // alert("You are Login ");
        // setinput(res.data);
        console.log(res.data)
        localStorage.setItem("username", res.data.name);
        localStorage.setItem("useremail", res.data.email)
        navigate("/dashboard")

          
        })
    } catch (error) {
        console.log(error);
        alert("server error");
    }

  }


    return(
        <>
        <div id="myfrom">
        <h1>Login User </h1>
         <Form>
    

      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Employee Email</Form.Label>
        <Form.Control type="text" name='email' value={input.email} onChange={Handelchange}  />
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
export default Login;