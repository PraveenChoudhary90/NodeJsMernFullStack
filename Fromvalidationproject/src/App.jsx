
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);
  useEffect(()=>{
    // setTimeout(()=>{
      setMulti(count*2);

    // },5000)
  },[count]);

// const [Input , setInput] = useState({});

// function ChangeInput(e){
//   const name = e.target.name;
//   const value = e.target.value;
//   setInput((values)=>({...values,[name]:value}));
//   console.log(Input);
// }
// function handelSubmit(){
//   console.log(Input)
// }

  return (
    <>
    <h1>Count:{count}</h1>
    <h1>Multi:{multi}</h1>
    <button onClick={()=>{setCount(count+1)}} >click here</button>
  {/* <h1>Application Form</h1>
  My Name : <input type='text' name='name' onChange={ChangeInput} /><br></br>
  My City : <input type='text' name='city' onChange={ChangeInput} /><br></br>
  My Subject : <input type='text' name='subject' onChange={ChangeInput} /><br></br>
  My Fees : <input type='text' name='fees' onChange={ChangeInput} /><br></br>
  <button onClick={handelSubmit} >Save Data!!</button> */}
    </>
  )
}

export default App
