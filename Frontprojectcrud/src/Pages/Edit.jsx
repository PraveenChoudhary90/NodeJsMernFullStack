import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
const Edit=()=>{
    const navigate=useNavigate()
    const [input, setInput] = useState({})
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
const loadData=()=>{
    let api='http://localhost:8000/employee/getEditData';
    axios.post(api,{id:id}).then((res)=>{
        setInput(res.data)
    })
}


useEffect(()=>{
   loadData() 
},[])
    const handleSubmit = async () => {
        let api = "http://localhost:8000/employee/editdata";
        axios.post(api, input).then((res) => {
            message.success("Data Updated Successfully")
            navigate("/update")
        })
    }
    const {id}=useParams()
    return(
        <>
    <h1 style={{ backgroundColor: "#4CAF50", color: "white", padding: "20px", textAlign: "center", borderRadius: "10px 10px 0 0" }}>Edit</h1>

 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee No</Form.Label>
        <Form.Control type="text" name='empno' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type="text" name='designation' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type="text" name='salary' onChange={handleInput} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
</>
    )
}
export default Edit