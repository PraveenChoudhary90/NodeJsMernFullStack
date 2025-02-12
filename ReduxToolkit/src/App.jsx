
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { MyChnage } from './ColorSlice';
import { useState } from 'react';

function App() {
  const mydata = useSelector(state=>state.mycolor.color);
  const dispatch = useDispatch();
  const [val,setVal]= useState("");

 

  return (
    <>
    My Color:<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <button onClick={()=>{dispatch(MyChnage(val))}} >Click Here</button>
      <hr size="4" color='red' />
      <div style={{width:"300px", height:"300px", backgroundColor:mydata}}></div>
    </>
  )
}

export default App
