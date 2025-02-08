
// import { useRef } from 'react'
import './App.css'
import ReducerColor from './ReducerColor'
import ReducresHook from './Reducershook'

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

  return (
    <>
    <ReducerColor/>
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
