
import { useState } from 'react';
import './App.css'

function App() {
    const myname = ()=>{
      alert("welcome!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    const parafun = (nm)=>{
      alert(`my name is: ${nm}`)
    }

    function eventfun(nm , e){
     alert(`my name:${nm}, Event type:${e.type}`);
     console.log(e);
    }

    function Target(e){
      console.log(e);
      const name = e.target.name;
      const value = e.target.value;
      console.log(name);
      console.log(value);
      console.log({[name]:value});

    }


    const [name,setName] = useState("");
    const [city,setCity] = useState("");

    const finalsubmit = ()=>{
      const input = {name:name,city:city};
      console.log(input);
    }
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={myname} >Click here</button>
      <button onClick={()=>{parafun("praveenchoudhary")}} >Paramater</button>
      <button onClick={(e)=>{eventfun("praveen",e)}} >event[e]</button>
      <button name='praveen' value="choudhary" onClick={(e)=>{Target(e)}} >Target value and Name</button>
      <h1>Form Application</h1>
      my name : <input type = "text" name = "name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br></br>
      my city : <input type = "text" name = "city" value={city} onChange={(e)=>{setCity(e.target.value)}} /><br></br>
      <button onClick={finalsubmit()} >Submit data</button>
    </>
  )
}

export default App
