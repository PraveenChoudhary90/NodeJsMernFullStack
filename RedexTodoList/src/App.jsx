import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { MyAdd , Mydelete,Complete, InComplete, MyEditDataSave} from "./TodoSlice";
import Table from 'react-bootstrap/Table';


function App(){
  const [val,setVal]= useState("");
  const MyTaskbtn = useSelector(state=>state.todo.task);
  const dispatch = useDispatch();
const [btnStatus,setbtnStatus]=useState(true);
const [workid, setWorkId] = useState("");

  const myComplete=(id)=>{
    dispatch(Complete({id:id}));
  }
  const myInComplete=(id)=>{
    dispatch(InComplete({id:id}));
  };


 const MyEditdata = ()=>{
    setVal(work);
    setWorkId(id);
    setbtnStatus(flase)
 }



 const Myeditdatasave = ()=>{
  dispatch(MyEditDataSave({id:workid, data:val}));
  setbtnStatus(true);
 }






 let sno =0;
  const ans  =MyTaskbtn.map((key,index)=>{
       sno++;
       return(
        <>
        <tr key={index}>
          <th>{sno}</th>
          <td>
             {key.CompStatus ? 
             (<> 
                  
                   <span style={{color:"red", textDecoration:"line-through"}}> {key.work}  </span> 
                  </>) :
                   (<> 
                  
                    {key.work}
                  </>)}
          </td>
          <td onClick={()=>{dispatch(Mydelete({id:key.id}))}} >Delete</td>
          <td>
            {key.ComStatus?(
              <>
          <td onClick={()=>{myInComplete(key.id)}}>InComplete</td>

              </>
            ):(
              <>
          <td onClick={()=>{myComplete(key.id)}}>Complete</td>
              
              
              </>
            )}
          </td>
          <td onClick={()=>{Myeditdatasave(key.id,key.work)}}>Edit</td>
        </tr>
        
        </>
       )
  })
  return(
    <>
    <center>
    <h1> Welcome to our todo list</h1>
    Enter your task :<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
    {btnStatus?
    (<>
    
    <button onClick={()=>{dispatch(MyAdd({id:Date.now(),work:val, ComStatus:false}))}}>Add</button>
    
    </>):
    (<>
    
    <button onClick={()=>{MyEditdata(key.id,key.work)}}>Edit</button>
    
    </>)}

    <hr size="6" color="red" />
     <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Add Task Here</th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
      </center>
    </>
  )

}

export default App;