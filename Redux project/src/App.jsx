
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './CounterSlice';

function App() {
   const count = useSelector((state)=>state.mycount.count);
   const dispatch = useDispatch();

  return (
    <>
  <button onClick={()=>{dispatch(increment())}}>Increment</button>
  <h1>Count:{count}</h1>
  <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App
