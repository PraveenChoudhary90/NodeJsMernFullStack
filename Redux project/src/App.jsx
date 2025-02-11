
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment, Mybgcolor } from './CounterSlice';

function App() {
   const count = useSelector((state)=>state.mycount.count);
   const color = useSelector((state)=>state.mycount.color);
   const dispatch = useDispatch();

  return (
    <>
  <button onClick={()=>{dispatch(increment())}}>Increment</button>
  <h1>Count:{count}</h1>
  <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
  <h1>WElcome to our color sport</h1>
  <button onClick={()=>{dispatch(Mybgcolor())}} >color</button>
  <br></br>
  <div style={{width:"400px",height:"300px", backgroundColor:color}}></div>

  
    </>
  )
}

export default App
