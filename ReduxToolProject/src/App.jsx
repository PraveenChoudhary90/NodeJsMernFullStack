
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Mybgcolor } from './ColorSlice';
function App() {
  const mycolor  = useSelector((state)=>state.mycolor.bgcolor);
  const mydis = useDispatch();
  
  return (
    <>
  <h1>Welcome our color page</h1>
  <button onClick={()=>{mydis(Mybgcolor())}} >Add color</button>
  <br></br>
  <div style={{width:"600px",height:"300px", backgroundColor:mycolor}} ></div>
    </>
  )
}

export default App
