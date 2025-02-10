
// import { useRef } from 'react'
import { useState } from 'react'
import './App.css'
import UseCallBackHook from './UseCallBackhook'
import UseMemoHook from './UseMemoHook'
import UseMemo from './UseMemorisetion'
import { useCallback } from 'react'
// import ReducerColor from './ReducerColor'
// import ReducresHook from './Reducershook'

function App() {
  // const myRef = useRef("");
  // const myVal = ()=>{
  //   myRef.current.style.color = "red";
  //   myRef.current.style.border = "2px solid black";
  //   myRef.current.style.padding = "30px";
  //   myRef.current.style.backgroundColor = "yellow";
  //   myRef.current.style.width = "600px";
  //   myRef.current.style.fontSize = "40px";
  //   console.log(myRef.current);
  
  // }
  // const myVal = ()=>{
  //   myRef.current.style.fontSize = "40px";
  //   myRef.current.style.width = "600px";

  // }
  // const myVal1 = ()=>{
  //   myRef.current.style.border = "2px solid black";
  //   myRef.current.style.backgroundColor = "yellow";
  //   myRef.current.style.width = "600px";
  // }
  // const myVal2 = ()=>{
  //   myRef.current.style.borderRadius = "50px";
  //   myRef.current.style.width = "600px";

  // }
 
  const [count, setCount]=useState(0);
  const [task,setTask]=useState([]);
    

  const myAdd = ()=>{
    setTask(values=>([...values,"New Task"]));
  }

  const MyAddData = useCallback(myAdd, [task]);




  return (
    <>
    <h1>Count:{count}</h1>
    <UseCallBackHook task={task} Addtask={MyAddData} />
    <button onClick={()=>{setCount(count+1)}} >click here</button>
    {/* <UseMemoHook/> */}
    {/* <UseMemo/> */}
    {/* <ReducerColor/> */}
   {/* <ReducresHook/> */}
     {/* <h1>Welcome</h1> */}
     {/* <div ref={myRef}>
      Welcome To Bhopal City
     </div>
      <button onClick={myVal} >Click Fontsize</button>
    <button onClick={myVal1} >Click border</button>
    <button onClick={myVal2} >Click cricle</button> */}
    </>
  )
}

export default App
