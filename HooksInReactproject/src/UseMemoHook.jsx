import { useMemo } from "react";
import { useState } from "react";

const UseMemoHook = ()=>{
    const [add, setAdd]= useState(0);
    const [sub, setSub]= useState(100);
    const MyMulti = useMemo(myMulti, [add]);

    function myMulti(){
        console.log("********")
        return add*2
        
    }
    
    return(
        <>
        <h1>MyMultipication:{MyMulti}</h1>
        <h1>ADD:{add}</h1>
        <button onClick={()=>{setAdd(add+1)}} >Click </button>
         <h1>Subtratction:{sub}</h1>
        <button onClick={()=>{setSub(sub-1)}} >Click </button>
        
        </>
    )
}
export default UseMemoHook;