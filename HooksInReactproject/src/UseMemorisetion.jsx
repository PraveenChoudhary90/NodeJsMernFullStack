import { useState, useMemo } from "react"

const UseMemo = ()=>{
    const [num, setNum]= useState(0);
    const [city,setCity]=useState("");
    const MyMulti = useMemo(mymulti, [num]);
    function mymulti(){
        for(let i = 0 ;i<=100000000;i++){}
        return num*2;
  
        
    }
    return(
        <>
        My Number :<input type="text" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
        My City:<input type="text"  value={city} onChange={(e)=>{setCity(e.target.value)}}/>
        <h1>MyMultification:{MyMulti}</h1>
        
        </>
    )
}

export default UseMemo;