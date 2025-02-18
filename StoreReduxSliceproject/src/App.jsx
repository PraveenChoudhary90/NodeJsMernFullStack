
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Mybgcolor } from './ColorSlice';
import { Decrement, Increment } from './CountSlice';

function App() {
  const [input ,setinput]= useState("");
  const MyCol = useSelector(state=>state.Mycolor.color);
  const count = useSelector(state=>state.Mycount.count)
  const dispatch = useDispatch();

  
  return (
    <>
   <button onClick={()=>{dispatch(Increment())}}>Increment</button>
   <h1>Count:{count}</h1>
   <button onClick={()=>{dispatch(Decrement())}}>Decrement</button><br></br>
   <h1>Welcome background color change </h1><br></br>
    Enter your Color: <input type='text' value={input} onChange={(e)=>{setinput(e.target.value)}} />
   <button onClick={()=>{dispatch(Mybgcolor(input))}}>Color Search</button>
   <hr size="4" color='red' />
   <div style={{width:"400px", height:"300px", backgroundColor:MyCol}}></div>
    </>
  )
}

export default App
