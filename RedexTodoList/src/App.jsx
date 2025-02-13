import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { MyAdd } from "./TodoSlice";
import Table from 'react-bootstrap/Table';


function App(){
  const [val,setVal]= useState("");
  const MyTaskbtn = useSelector(state=>state.todo.task);
  const dispatch = useDispatch();

 let sno =0;
  const ans  =MyTaskbtn.map((key)=>{
       sno++;
       return(
        <>
        <tr>
          <th>{sno}</th>
          <td>{key.work}</td>
        </tr>
        
        </>
       )
  })
  return(
    <>
    <h1> Welcome to our todo list</h1>
    Enter your task :<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
    <button onClick={()=>{dispatch(MyAdd({work:val}))}}>Add</button>

    <hr size="6" color="red" />
     <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
    </>
  )

}

export default App;