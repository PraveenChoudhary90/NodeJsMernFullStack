import { useDispatch, useSelector } from 'react-redux';

import './App.css'
import { MyAdd , Mydelete } from './TaskSlice'
import { useState } from 'react';
function App() {
  const Mytask = useSelector(state=>state.mytask.task);
  const dispatch = useDispatch();
  const [val,setval]= useState("");

  const ans = Mytask.map((key ,index)=>{
    return(
      <>
      
      <tr key={index}>
        <td>{key.task}</td>

     <button onClick={()=>{dispatch(Mydelete(key.id))}}>delete</button>
 
      </tr>
      

      </>
    )
  })


  return (
    <>

     <h1>Welcome to our todo list</h1>
     My Add Todo list:<input type='text' value={val} onChange={(e)=>{setval(e.target.value)}} />
     <button onClick={()=>{dispatch(MyAdd({task:val,id:Date.now()}))}}>Add Data</button>
     <hr size="4" color='blue' />
    
        <th>#add task here</th>
               {ans}


  
  
     {/* <div style={{width:"400px", height:"300px", backgroundColor:Mytask}}></div> */}
    </>
  )
}

export default App
