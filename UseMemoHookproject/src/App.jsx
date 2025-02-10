import { useState } from "react";
import Child from "./Child";
import { useCallback } from "react";
import UseMemo from "./UseMemo";


const App = ()=>{

  const[count, setCount]=useState(0);
  const [task,setTask]=useState([]);
  
   const myAdd = ()=>{
    setTask(values=>([...values,"New Task Addeed"]));
  }

 const MyAddData = useCallback(myAdd, [task])
 
  return(
    <>
    <h1>Count:{count}</h1>
    <Child task={task} addtask={MyAddData}/>
    <button onClick={()=>{setCount(count+1)}} >click here</button>


    <UseMemo/>
    </>
  )
}
export default App;