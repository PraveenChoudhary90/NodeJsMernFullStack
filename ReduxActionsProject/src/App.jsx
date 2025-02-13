import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import './App.css'
import { MyAdd , Mydelete } from './TaskSlice'
import { useState } from 'react';
function App() {
  const Mytask = useSelector(state=>state.mytask.task);
  const dispatch = useDispatch();
  const [val,setval]= useState("");
  const [btnStatus,setbtnStatus]=useState(true);

const MyComplete =(id)=>{
  dispatch(btnStatus({id:id}));
  console.log(MyComplete);
}


   let sno=0;
  const ans = Mytask.map((key ,index)=>{
    sno++;
    return(
      <>

      <tr key={index}>
        <td>{sno}</td>
        <td>{key.task}</td>
        <td>
     <button onClick={()=>{dispatch(Mydelete(key.id))}}>delete</button>
        </td>
        <td>
        <button onClick={MyComplete} >Complete</button>
        </td>
        <td>
        <button>InComplete</button>
        </td>
        <td>
          <button>Edit</button>
        </td>
      </tr>
  
      

      </>
    )
  })


  return (
    <>

     <h1>Welcome to our todo list</h1>
     My Add Todo list:<input type='text' value={val} onChange={(e)=>{setval(e.target.value)}} />
     <button onClick={()=>{dispatch(MyAdd({ComStatus:false,task:val,id:Date.now()}))}}>Add Data</button>
     <button onClick={()=>{dispatch(MyAdd({task:val,id:Date.now()}))}}>Edit Data</button>
     <hr size="4" color='blue' />
         <Table striped bordered hover border="2">
      <thead>
        <tr>
          <th>#</th>
          <th>Add Task Data</th>
          <th>Delete</th>
          <th></th>
          <th></th>
          <th>Edit</th>
         
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        
       


  
  
     {/* <div style={{width:"400px", height:"300px", backgroundColor:Mytask}}></div> */}
    </>
  )
}

export default App
